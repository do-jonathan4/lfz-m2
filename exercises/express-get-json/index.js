const express = require('express');
const app = express();

const myArr = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'John',
    course: 'Anime',
    grade: 1000
  }
];

app.get('/api/grades', (req, res) => {
  res.json(myArr);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
