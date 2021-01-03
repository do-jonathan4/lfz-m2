/* eslint-disable no-console */
const fs = require('fs');

const filesArr = process.argv.slice(2);

filesArr.forEach(content =>
  fs.readFile(content, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
);
