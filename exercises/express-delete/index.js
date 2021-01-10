const grades = [
  {
    id: 20,
    name: 'James',
    course: 'Who',
    grade: 100
  },
  {
    id: 30,
    name: 'John',
    course: 'What',
    grade: 90
  }
];

const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(grades);
});
app.delete('/api/grades/:id', (req, res) => {
  const gradeID = parseInt(req.params.id);
  const removeArr = grades.findIndex(x => x.id === gradeID);
  grades.splice(removeArr, 1);
  // console.log(gradeID);
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
