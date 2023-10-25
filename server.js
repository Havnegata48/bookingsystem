const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');  // Import the cors module

const app = express();
const PORT = 5000;

let db = new sqlite3.Database('./database.db');

// Use cors middleware
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Endpoint to save the scheduler data
app.post('/save', (req, res) => {
    let data = req.body.data;
    db.run('INSERT INTO scheduler_data(data) VALUES(?)', [data], (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Suksessfull lagring av data!' });
    });
});

// Endpoint to load the most recent scheduler data
app.get('/load', (req, res) => {
    db.get('SELECT data FROM scheduler_data ORDER BY id DESC LIMIT 1', [], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (row) {
            res.json(JSON.parse(row.data));
        } else {
            res.json([]);  // Return an empty array if no data is found
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
