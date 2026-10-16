const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: [true, 'noteTitle is required'],
        trim: true
    },
    noteDescription: {
        type: String,
        required: [true, 'noteDescription is required'],
        trim: true
    },
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM'],
        default: 'MEDIUM',
        uppercase: true
    },
    dateAdded: {
        type: String,
        default: () => new Date().toISOString()
    },
    dateUpdated: {
        type: String,
        default: () => new Date().toISOString()
    }
});

module.exports = mongoose.model('Note', NoteSchema);
