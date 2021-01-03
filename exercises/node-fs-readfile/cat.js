/* eslint-disable no-console */
const fs = require('fs');

const filesArr = process.argv.slice(2);

// for (var i = 0; i < filesArr.length; i++) {
//   fs.readFile(filesArr[i], 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
// }

filesArr.forEach(content =>
  fs.readFile(content, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
);
