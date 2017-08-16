const http = require('http');
const url = require('url');

function start(route, handle) {
  function onRequest(request, response) {

    const pathname = url.parse(request.url).pathname;

    console.log('Request for ', pathname);
    // route(handle, pathname, response);
    // const content = route(handle, pathname, response);

    // response.writeHead(200, {"Content-Type": "text/plain"});
    // response.write(content);
    // response.end();
    let data = '';
    request.addListener('data', function (postData) {
      data += postData;
      console.log('post data ing!!!' + postData);
    });
    request.addListener('end', function () {
      route(handle, pathname, response, data);
    });
  }
  http.createServer(onRequest).listen(8888);
  console.log('server is started');
}

exports.start = start;
