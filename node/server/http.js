const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Good!')
  response.end('hello world!!!');
}).listen(8080);

console.log('server running at localhost: 8080');