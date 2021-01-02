const fs = require('fs');

module.exports = (data, fileName, index, newNote) => {
  if (!newNote || !index) {
    console.log('Please include two arguments.');
    return;
  }
  if (newNote === 'read' || newNote === 'add' || newNote === 'delete' || newNote === 'update') {
    console.log('Please enter one command.');
    return;
  }
  if (isNaN(index)) {
    console.log('Please enter a number, follow by updated note.');
    return;
  }
  // eslint-disable-next-line
  if (!data.notes.hasOwnProperty(index)) {
    console.log(`Property ${index} does not exist. Please enter another one.`);
    return;
  }

  data.notes[index] = newNote;
  const json = JSON.stringify(data, null, 2);

  fs.writeFile(fileName, json, 'utf8', err => {
    if (err) throw err;
  });
};
