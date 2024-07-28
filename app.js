const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Load JSON data
const dinosaurs = require('./data/dinosaurs.json');

// API route to send JSON data
app.get('/api/dinosaurs', (req, res) => {
  res.json(dinosaurs);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
