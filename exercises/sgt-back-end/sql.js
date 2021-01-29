const getGrades = `
    select *
      from "grades"
  `;

const getGradeById = `
    select *
      from "grades"
     where "gradeId" = $1
  `;

module.exports = {
  getGrades,
  getGradeById
};
