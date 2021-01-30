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
    returning *
  `;

const putGrades = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *
  `;

const deleteGrades = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;

module.exports = {
  db,
  getGrades,
  getGradeById,
  postGrades,
  putGrades,
  deleteGrades
};
