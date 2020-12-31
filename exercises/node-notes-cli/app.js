const data = require('./data.json');
const fileName = './data.json';
const read = require('./features/read');
const add = require('./features/add');

if (process.argv[2] === 'read') {
  read(data);
}
if (process.argv[2] === 'add') {
  add(data, fileName, process.argv[3]);
}
