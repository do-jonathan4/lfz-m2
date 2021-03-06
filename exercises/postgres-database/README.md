# postgres-database

Creating a database within a PostgreSQL database server.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/postgres-database` directory in your terminal.

### Quiz

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a database schema?
- What is a table?
- What is a row?

### Introduction

Relational databases store data in **relations**, commonly referred to as **tables**. A table is a list of **rows** each having the same set of **attributes**. For example, all students in a `"students"` table could have `"firstName"`, `"lastName"`, and `"dateOfBirth"` attributes. Attributes are commonly referred to as **columns**. You might visualize a database table as a sort of spreadsheet where each row is a record in that spreadsheet. At the end of this exercises you'll get to see a visual representation of data in database tables. Come back and re-read this once you get to the end!

A collection of **tables** is called a **schema**. A **schema** defines how the data in a relational database should be organized. In relational databases, you typically have to define your schema up front and the database server will make sure that any data being written to the database conforms to that schema.

### Exercise

1. Make sure that PostgreSQL is running in your development environment.
1. Make a mental note of the databases in your PostgreSQL server by running:
    ```bash
    psql -c '\l'
    ```
1. Read about [creating databases from the command line](https://www.postgresql.org/docs/10/tutorial-createdb.html) in the official PostgreSQL documentation.
1. Use the `createdb` command to create a new database named `pagila`.
1. Verify that the new `pagila` database was created with the following command and write the output to a file:
    ```bash
    psql -c '\l' > list-of-databases.txt
    ```
1. Briefly skim through the supplied `data.sql` and `schema.sql` files included in this exercise. That's a lot of SQL!
1. Execute the following command to import the schema into PostgreSQL. This will set up a bunch of things in your `pagila` database, including all of the tables required. You'll see a lot of output in your terminal, but none of it should be errors.
    ```bash
    psql -d pagila -f schema.sql
    ```
1. Execute the following command to import all of the sample data into your `pagila` database. You'll see a lot of output, but none of it should be errors.
    ```bash
    psql -d pagila -f data.sql
    ```
1. Execute the following command to list all of the new tables in your `pagila` database and write the output to a file:
    ```bash
    psql -d pagila -c '\dt' > list-of-relations.txt
    ```
1. Start the `pgweb` application included in your development environment by typing `pgweb` and pressing enter.
1. While `pgweb` is running, visit `http://localhost:8081` in your browser and click on the upper left corner where it says `dev`. Change it to `pagila`.
1. You should see 15 tables listed. Click on each of them to see their data.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-mod-2-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
