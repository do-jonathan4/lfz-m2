const fs = require('fs');

module.exports = (data, fileName, index) => {
  delete data.notes[index];
  const json = JSON.stringify(data, null, 2);

  fs.writeFile(fileName, json, 'utf8', err => {
    if (err) throw err;
  });
};
