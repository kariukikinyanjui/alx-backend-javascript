const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbPath = process.argv[2];
  countStudents(dbPath)
    .then(() => {
      res.type('text').send('This is the list of our students');
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
