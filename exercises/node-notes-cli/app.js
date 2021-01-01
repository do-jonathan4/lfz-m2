const data = require('./data.json');
const fileName = './data.json';
const read = require('./features/read');
const add = require('./features/add');
const remove = require('./features/delete');
const update = require('./features/update');

if (process.argv[2] === 'read') {
  read(data);
}
if (process.argv[2] === 'add') {
  add(data, fileName, process.argv[3]);
}
if (process.argv[2] === 'delete') {
  remove(data, fileName, process.argv[3]);
}
if (process.argv[2] === 'update') {
  update(data, fileName, process.argv[3], process.argv[4]);
}
