const fs = require('fs');

const qoute = process.argv[2];

fs.writeFile('note.txt', qoute, err => {
  if (err) throw err;
});
