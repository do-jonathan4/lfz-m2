/* eslint-disable no-console */
var countDown = 3;

const blast = setInterval(() => {
  console.log(countDown);
  countDown--;
  if (!countDown) {
    console.log('Blast off!');
    clearInterval(blast);
  }
}, 1000);
