/* eslint-disable */
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api/grades', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const notesFile = JSON.parse(data);
    const notesArray = Object.values(notesFile.notes);
    res.status(200).json(notesArray);
  });
});
app.get('/api/grades/:id', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const notesID = parseInt(req.params.id);
    const notesFile = JSON.parse(data);
    const notesArray = notesFile.notes[notesID];

    if (isNaN(notesID)) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else if (!notesFile.notes.hasOwnProperty(notesID)) {
      res.status(404).json({ error: `cannot find note with id ${notesID}` });
    } else {
      res.status(200).json(notesArray);
    }
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
