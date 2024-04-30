const http = require('http');

// Create HTTP server
const PORT = 1245;
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

module.exports = app;
