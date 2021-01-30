const express = require('express');

const app = express();
app.use(express.json());

const {
  db,
  getGrades,
  getGradeById,
  postGrades
} = require('./sql.js');

app.get('/api/grades/', (req, res, next) => {
  db.query(getGrades)
    .then(result => { res.status(200).json(result.rows); })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }
  const params = [gradeId];
  db.query(getGradeById, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades/', (req, res, next) => {
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    res.status(400).json({ error: 'Please inclue all the required fields' });
    return;
  } else if (!Number.isInteger(parseInt(score)) || parseInt(score) <= 0) {
    res.status(400).json({ error: 'Score must be a positive integer' });
    return;
  }

  const newGrade = [name, course, score];
  db.query(postGrades, newGrade)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
