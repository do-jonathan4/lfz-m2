/* eslint-disable no-console */
var book1 = [
  {
    isbn: '123456789a',
    title: 'A',
    author: 'A'
  },
  {
    isbn: '123456789b',
    title: 'B',
    author: 'B'
  },
  {
    isbn: '123456789c',
    title: 'C',
    author: 'C'
  }
];
console.log('result: ', JSON.stringify(book1));
console.log('type: ', typeof JSON.stringify(book1));

var student = JSON.stringify(
  {
    id: 1234,
    name: 'John'
  }
);

console.log('result: ', JSON.parse(student));
console.log('type: ', typeof JSON.parse(student));
