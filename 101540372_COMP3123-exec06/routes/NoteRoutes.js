const noteModel = require('../models/NotesModel.js');
const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = express.Router();

// Reject malformed ids before hitting the DB
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// Create a new Note
noteRoutes.post('/notes', async (req, res) => {
    if (!req.body || !req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try {
        const note = new noteModel(req.body.content);
        const saved = await note.save();
        res.status(201).send(saved);
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).send({ message: err.message });
        }
        res.status(500).send({ message: err.message || "Error while creating the note" });
    }
});

// Retrieve all Notes
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).send(notes);
    } catch (err) {
        res.status(500).send({ message: err.message || "Error while retrieving notes" });
    }
});

// Retrieve a single Note with noteId
noteRoutes.get('/notes/:noteId', async (req, res) => {
    if (!isValidId(req.params.noteId)) {
        return res.status(400).send({ message: "Invalid note id" });
    }
    try {
        const note = await noteModel.findById(req.params.noteId);
        if (!note) {
            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
        }
        res.status(200).send(note);
    } catch (err) {
        res.status(500).send({ message: err.message || "Error while retrieving the note" });
    }
});

// Update a Note with noteId
noteRoutes.put('/notes/:noteId', async (req, res) => {
    if (!req.body || !req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    if (!isValidId(req.params.noteId)) {
        return res.status(400).send({ message: "Invalid note id" });
    }
    try {
        const update = { ...req.body.content, dateUpdated: new Date().toISOString() };
        delete update.dateAdded; // never overwrite creation date
        const note = await noteModel.findByIdAndUpdate(req.params.noteId, update, {
            new: true,
            runValidators: true
        });
        if (!note) {
            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
        }
        res.status(200).send(note);
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).send({ message: err.message });
        }
        res.status(500).send({ message: err.message || "Error while updating the note" });
    }
});

// Delete a Note with noteId
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    if (!isValidId(req.params.noteId)) {
        return res.status(400).send({ message: "Invalid note id" });
    }
    try {
        const note = await noteModel.findByIdAndDelete(req.params.noteId);
        if (!note) {
            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
        }
        res.status(200).send({ message: "Note deleted successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message || "Error while deleting the note" });
    }
});

module.exports = noteRoutes;
