# oop-classroom-challenge

Using Object Oriented JavaScript to build a classroom application.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/oop-classroom-challenge` directory in your terminal.

### Challenge

Use Object Oriented JavaScript to create a `Classroom` that can create and find students.

All challenges done in oop may be accomplished in different ways.  The following are how we expect your application to be layed out, but of course your end solution may differ.  Be sure to question the differences in the solution provided after this challenge is given to you.

###  Layout
___

**`classroom.js`**

  Implement the `Classroom` class: a class responsible for storing your students, adding students, and finding students in the classroom.

  #### Methods:

  1. `constructor()`

      - Stores the students in an array.

  1. `addStudent(student)`

      - Checks if the student parameter is a an instance of the Student class.
      - if true, add the student to the students array and return true.
      - if false, return false.

  1. `findStudent(firstName, lastName)`

      - Finds the student object in the students array.
      - If found, return the student object.
      - If not found, return null.

**`student.js`**

  Implement the `Student` class: a class responsible for storing your student's first name, last name, and age.

  #### Methods:

  1. `constructor(firstName, lastName, age)`

      - Stores the student's first name
      - Stores the student's last name
      - Stores the student's age

  1. `getBio()`

      - Returns the following string using the properties of the object:
      `"Hello! My name is (First Name) (Last Name) and I am (Age) years old."`

### Example List

  - [Add a Student to Classroom](#add-a-student-to-classroom)
  - [Find a Student in Classroom](#find-a-student-in-classroom)
  - [Get Bio from Student](#get-bio-from-student)

## Examples

### Add a Student to Classroom

```js
var classRoom = new Classroom()
var student = new Student("Robert", "Martin", 68)
classRoom.addStudent({}) // returns false
classRoom.addStudent(student) // returns true
```

### Find a Student in Classroom

```js
var classRoom = new Classroom()
var student = new Student("Ryan", "Dahl", 39)
classRoom.addStudent(student)
var foundStudent1 = classRoom.findStudent("Scooby", "Doo") // returns null
var foundStudent2 = classRoom.findStudent("Ryan", "Dahl") // returns student object
```

### Get Bio from Student

```js
var classRoom = new Classroom()
var student = new Student("John", "Ousterhout", 65)
classRoom.addStudent(student)
var foundStudent = classRoom.findStudent("John", "Ousterhout")
var studentBio = foundStudent.getBio()
// returns:
// "Hello! My name is John Ousterhout and I am 65 years old."
```

___
### References

- [instanceOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)


### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
