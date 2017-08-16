const http = require('http');
const url = require('url');
const formidable = require('formidable');
const util = require('util');

function start(route, handle) {
  function onRequest(request, response) {

    const pathname = url.parse(request.url).pathname;
    //
    // console.log('Request for ', pathname);
    // route(handle, pathname, response);
    // const content = route(handle, pathname, response);

    // response.writeHead(200, {"Content-Type": "text/plain"});
    // response.write(content);
    // response.end();
    
    //post 请求
    // let data = '';
    // request.addListener('data', function (postData) {
    //   data += postData;
    //   console.log('post data ing!!!' + postData);
    // });
    // request.addListener('end', function () {
    //   route(handle, pathname, response, data);
    // });
    
    // if (request.url === '/upload' && request.method.toLowerCase() === 'post') {
    //   const form = new formidable.IncomingForm();
    //   form.parse(request, function (err, fields, files) {
    //     response.writeHead(200, {'content-type': 'text/plain'});
    //     response.write('received upload:\n\n');
    //     response.end(util.inspect({fields: fields, files: files}));
    //   });
    //   return;
    // }
    //
    // response.writeHead(200, {'content-type': 'text/html'});
    // response.end(
    //   '<form action="/upload" enctype="multipart/form-data" '+
    //   'method="post">'+
    //   '<input type="text" name="title"><br>'+
    //   '<input type="file" name="upload" multiple="multiple"><br>'+
    //   '<input type="submit" value="Upload">'+
    //   '</form>'
    // );
    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(8888);
  console.log('server is started');
}

exports.start = start;
