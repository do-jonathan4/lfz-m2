const fs = require('fs');

const oldFile = process.argv[2];
const newFile = process.argv[3];

fs.readFile(oldFile, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(newFile, data, err => {
    if (err) throw err;
  });
});
