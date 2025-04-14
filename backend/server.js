const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Sample endpoint for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Example: Fetch all maintenance tasks
app.get('/api/maintenance', (req, res) => {
  db.all('SELECT * FROM maintenance', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
