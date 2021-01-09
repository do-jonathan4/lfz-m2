const grades = [];
let nextId = 1;

const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(grades);
});
app.post('/api/grades', (req, res) => {
  const obj = req.body;
  obj.id = nextId;
  grades.push(obj);
  res.status(201).send(obj);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
