const libary = [
  {
    title: 'A',
    author: 'John',
    isbn: 12345
  },
  {
    title: 'B',
    author: 'James',
    isbn: 67890
  },
  {
    title: 'C',
    author: 'Joe',
    isbn: 54321
  }
];

console.log(JSON.stringify(libary));
console.log('typeof: ', typeof JSON.stringify(libary));

const student = '{"studentName": "John", "id": 123}';

console.log(JSON.parse(student));
console.log('typeof: ', typeof JSON.parse(student));
