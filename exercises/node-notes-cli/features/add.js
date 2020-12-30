const fs = require('fs');

module.exports = (fileName, newNote) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    obj.notes[obj.nextId] = newNote;
    obj.nextId++;
    const json = JSON.stringify(obj, null, 2);

    fs.writeFile(fileName, json, 'utf8', err => {
      if (err) throw err;
    });
  });
};
