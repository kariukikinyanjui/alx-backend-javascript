const http = require('http');
const { URL } = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url.pathname === '/students') {
    const dbPath = process.argv[2];
    countStudents(dbPath)
      .then(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students');
        res.end();
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write(error.message);
        res.end();
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

module.exports = app;
