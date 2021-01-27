const takeAChance = require('./take-a-chance');

var myName = takeAChance('John');

myName.then(value => {
  console.log(value);
});

myName.catch(error => {
  console.error(error.message);
});
