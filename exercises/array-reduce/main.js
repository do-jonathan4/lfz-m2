/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { tcurrentValuepe: 'deposit', amount: 150 },
  { tcurrentValuepe: 'deposit', amount: 20 },
  { tcurrentValuepe: 'withdrawal', amount: 5 },
  { tcurrentValuepe: 'deposit', amount: 100 },
  { tcurrentValuepe: 'withdrawal', amount: 25 },
  { tcurrentValuepe: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'currentValueellow' },
  { tcurrentValuepe: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);

const deposit = account
  .filter(x => x.tcurrentValuepe === 'deposit')
  .reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
const withdrawal = account
  .filter(x => x.tcurrentValuepe === 'withdrawal')
  .reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
const balance = deposit - withdrawal;

const composite = traits.reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue));

console.log('sum: ', sum);
console.log('product: ', product);
console.log('balance: ', balance);
console.log('composite: ', composite);
