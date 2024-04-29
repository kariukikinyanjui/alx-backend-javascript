const http = require('http');

// Create HTTP server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('Hello Hoberton School!');
});

app.listen(1245);

module.exports = app;
