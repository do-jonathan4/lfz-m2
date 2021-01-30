const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const getGrades = `
    select *
      from "grades"
  `;

const getGradeById = `
    select *
      from "grades"
     where "gradeId" = $1
  `;

const postGrades = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
  `;

module.exports = {
  db,
  getGrades,
  getGradeById,
  postGrades
};
