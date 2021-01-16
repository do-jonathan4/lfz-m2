/* eslint-disable */
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

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
    const notesFile = JSON.parse(data);
    const notesID = parseInt(req.params.id);
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
app.post('/api/grades', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err
    const notesFile = JSON.parse(data);
    const content = req.body

    if (!content['content']) {
      res.status(400).json({ error: 'content is a required field' })
    } else {
      content.id = notesFile.nextId
      notesFile.notes[notesFile.nextId] = content
      notesFile.nextId++
      const newNotes = JSON.stringify(notesFile, null, 2)

      fs.writeFile('./data.json', newNotes, 'utf8', err => {
        if (err) {
          res.status(500).json({ error: 'unexpected error occured' })
        };
        res.status(201).send(content)
      });
    }

  })
})
app.delete('/api/grades/:id', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const notesFile = JSON.parse(data);
    const notesID = parseFloat(req.params.id);

    if (isNaN(notesID) || !Number.isInteger(notesID) || notesID < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else if (!notesFile.notes.hasOwnProperty(notesID)) {
      res.status(404).json({ error: `cannot find note with id ${notesID}` });
    } else {
      delete notesFile.notes[notesID]
      const newNotes = JSON.stringify(notesFile, null, 2)

      fs.writeFile('./data.json', newNotes, 'utf8', err => {
        if (err) {
          res.status(500).json({ error: 'unexpected error occured' })
        };
        res.sendStatus(204)
      });
    }
  })
})
app.put('/api/grades/:id', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const notesFile = JSON.parse(data);
    const notesID = parseFloat(req.params.id);
    const content = req.body

    if (isNaN(notesID) || !Number.isInteger(notesID) || notesID < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else if (!content['content']) {
      res.status(400).json({ error: 'content is a required field' })
    } else if (!notesFile.notes.hasOwnProperty(notesID)) {
      res.status(404).json({ error: `cannot find note with id ${notesID}` });
    } else {
      notesFile.notes[notesID] = content
      const newNotes = JSON.stringify(notesFile, null, 2)

      fs.writeFile('./data.json', newNotes, 'utf8', err => {
        if (err) {
          res.status(500).json({ error: 'unexpected error occured' })
        };
        res.status(200).send(content)
      });
    }
  })
})

app.listen(3000, () => {
  console.log('Listening to port 3000!')
})
