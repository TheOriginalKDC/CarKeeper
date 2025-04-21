const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Get all vehicles
app.get('/vehicles', (req, res) => {
  db.all('SELECT * FROM vehicles', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add new vehicle
app.post('/vehicles', (req, res) => {
  const { make, model, year, mileage } = req.body;
  const sql = 'INSERT INTO vehicles (make, model, year, mileage) VALUES (?, ?, ?, ?)';
  db.run(sql, [make, model, year, mileage], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

// Get all maintenance entries
app.get('/maintenance', (req, res) => {
  db.all('SELECT * FROM maintenance', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add new maintenance entry
app.post('/maintenance', (req, res) => {
  const { vehicle_id, type, mileage_interval, last_service_mileage, notes } = req.body;
  const sql = `
    INSERT INTO maintenance (vehicle_id, type, mileage_interval, last_service_mileage, notes)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.run(sql, [vehicle_id, type, mileage_interval, last_service_mileage, notes], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
