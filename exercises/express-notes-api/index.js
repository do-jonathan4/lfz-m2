const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api/grades', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const notesFile = JSON.parse(data);
    res.json(notesFile.notes);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
