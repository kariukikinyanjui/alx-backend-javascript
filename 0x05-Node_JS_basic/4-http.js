const http = require('http');

// Create HTTP server
const PORT = 1245;
const app = http.createServer((req, res) => {

  res.statusCode = 200;

  res.writeHead('Content-Type', 'text/plain');

  res.end('Hello Hoberton School!');
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on ${PORT}`);
});

module.exports = app;
