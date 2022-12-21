'use strict';

const http = require('http');

const hostname = '127.0.0.1'
const port = 5000;

// const server = http.createServer((request, response) => {
//   if (request.method === 'POST' && request.url === '/echo') {
//     let body = [];
//     request.on('data', (chunk) => {
//       body.push(chunk);
//     }).on('end', () => {
//       body = Buffer.concat(body).toString();
//       response.end(body);
//     });
//   } else {
//     response.statusCode = 404;
//     response.end();
//   };
// });
const server = http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end()
  })
  response.on('error', (err) => {
    console.error(err)
  })
  if (request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  }
})

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`)
})

