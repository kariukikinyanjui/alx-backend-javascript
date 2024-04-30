const http = require('http');
const countStudents = require('./3-read_file_async');
const PORT = 1245;

const app = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost:1245');

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    const databaseFile = req.headers['x-filename'] || 'database.csv';

    try {
      const studentData = await countStudents(databaseFile);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(studentData);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error: Cannot load the database');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT}/`);
});

module.exports = app;
