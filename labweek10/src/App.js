import { useState } from 'react';
import './App.css';

const provinces = ['Alberta','British Columbia','Manitoba','New Brunswick',
  'Newfoundland and Labrador','Nova Scotia','Ontario','Prince Edward Island',
  'Quebec','Saskatchewan'];

function App() {
  const [form, setForm] = useState({
    email: '', name: '', address: '', city: '', province: '', postalCode: ''
  });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div className="container">
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter email"
          value={form.email} onChange={handleChange} required />

        <label>Full Name</label>
        <input type="text" name="name" placeholder="Full Name"
          value={form.name} onChange={handleChange} required />

        <label>Address</label>
        <input type="text" name="address" placeholder="1234 Main St"
          value={form.address} onChange={handleChange} required />

        <label>City</label>
        <input type="text" name="city"
          value={form.city} onChange={handleChange} required />

        <label>Province</label>
        <select name="province" value={form.province}
          onChange={handleChange} required>
          <option value="">Choose...</option>
          {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>

        <label>Postal Code</label>
        <input type="text" name="postalCode"
          value={form.postalCode} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="output">
          <table>
            <tbody>
              <tr><td><b>Email:</b></td><td>{submitted.email}</td></tr>
              <tr><td><b>Full Name:</b></td><td>{submitted.name}</td></tr>
              <tr><td><b>Address:</b></td><td>{submitted.address}</td></tr>
              <tr><td><b>City:</b></td><td>{submitted.city}</td></tr>
              <tr><td><b>Province:</b></td><td>{submitted.province}</td></tr>
              <tr><td><b>Postal Code:</b></td><td>{submitted.postalCode}</td></tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
