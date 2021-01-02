const data = require('./data.json');
const fileName = './data.json';
const read = require('./features/read');
const add = require('./features/add');
const remove = require('./features/delete');
const update = require('./features/update');

const command = process.argv[2].toLowerCase();
const message = process.argv[3];

if (command === 'read') {
  if (message) {
    console.log('Too many arguments.');
    return;
  }
  read(data);
} else if (command === 'add') {
  if (process.argv[4]) {
    console.log('Too many arguments. Please enter only one');
    return;
  }
  add(data, fileName, message);
} else if (command === 'delete') {
  if (process.argv[4]) {
    console.log('Too many arguments. Please enter only one');
    return;
  }
  remove(data, fileName, message);
} else if (command === 'update') {
  if (process.argv[5]) {
    console.log('Too many arguments. Please enter only one');
    return;
  }
  update(data, fileName, message, process.argv[4]);
} else {
  console.log('Please enter valid command');
}
