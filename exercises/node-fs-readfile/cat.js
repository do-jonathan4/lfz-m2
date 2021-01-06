/* eslint-disable no-console */
const fs = require('fs');

const filesArr = process.argv.slice(2);

let i = 0;
while (i < filesArr.length) {
  fs.readFile(filesArr[i], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  i++;
}
