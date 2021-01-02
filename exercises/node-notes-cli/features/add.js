const fs = require('fs');

module.exports = (data, fileName, newNote) => {
  if (!newNote) {
    console.log('Please include argument');
    return;
  }
  if (newNote === 'read' || newNote === 'add' || newNote === 'delete' || newNote === 'update') {
    console.log('Please enter one command');
    return;
  }

  data.notes[data.nextId] = newNote;
  data.nextId++;
  const json = JSON.stringify(data, null, 2);

  fs.writeFile(fileName, json, 'utf8', err => {
    if (err) throw err;
  });
};
