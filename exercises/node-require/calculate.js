const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = parseFloat(process.argv[2]);
const operator = process.argv[3];
const num2 = parseFloat(process.argv[4]);

if (operator === 'plus') {
  console.log(`result: ${Number(add(num1, num2))}`);
}
if (operator === 'minus') {
  console.log(`result: ${Number(subtract(num1, num2))}`);
}
if (operator === 'times') {
  console.log(`result: ${Number(multiply(num1, num2))}`);
}
if (operator === 'divide') {
  console.log(`result: ${Number(divide(num1, num2))}`);
}
