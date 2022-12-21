'use strict';

const http = require('http')

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  // res.setHeader('Content-Type', 'text/plain');
  // res.setHeader('Some-Custom-Header', 'abracadabra bla-bla-bla');
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Some-Custom-Header': 'abracadabra bla-bla-bla',
  });

  // res.end('hello world')
  // response.end('<html><body><h1>Hello, World!</h1></body></html>')
  res.write('<html>');
  res.write('<body>');
  res.write('<h1>Hello, World!</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
})

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`)
})

