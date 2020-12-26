const data = require('./data.json');
const read = require('./features/read');

if (process.argv[2] === 'read') {
  read(data);
}
