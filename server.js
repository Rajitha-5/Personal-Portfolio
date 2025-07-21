require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your frontend
app.use(express.static('public'));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

// Handle form POST
app.post('/contact', (req, res) => {
  const { name, mobile, email, message } = req.body;
  const sql = 'INSERT INTO contact_form (name, mobile, email, message) VALUES (?, ?, ?, ?)';
  
  db.query(sql, [name, mobile, email, message], (err, result) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).json({ success: false, message: 'Error saving data' });
    }
    console.log('Data inserted:', result.insertId);
    res.json({ success: true, message: 'Form submitted successfully' });
  }); // this is for db.query
}); // this is for app.post

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
