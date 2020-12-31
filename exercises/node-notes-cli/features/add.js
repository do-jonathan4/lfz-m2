const fs = require('fs');

module.exports = (data, fileName, newNote) => {
  data.notes[data.nextId] = newNote;
  data.nextId++;
  const json = JSON.stringify(data, null, 2);

  fs.writeFile(fileName, json, 'utf8', err => {
    if (err) throw err;
  });
};
