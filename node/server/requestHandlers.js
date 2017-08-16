const exec = require('child_process').exec;
const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

function start(response, data) {
  console.log('start page');

  //同步阻塞，会阻塞后面的请求
  // function sleep(second) {
  //   const now = new Date().getTime();
  //   while (new Date().getTime() < now + second);
  // }
  // sleep(10000); //等待10s

  //非阻塞，不会阻塞后面的请求
  // exec('find /', {timeout: 10000, maxBuffer: 20000 * 1024}, function (err, stdout, stderr) {
  //   response.writeHead(200, {"content-type": "text/plain"});
  //   response.write("start!!!");
  //   response.end();
  // });

  const body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

  response.writeHead(200, {"content-type": "text/html"});
  response.write(body);
  response.end();
}
function upload(response, request) {
  // console.log('upload page');
  // response.writeHead(200, {"content-type": "text/plain"});
  // response.write("get post data is " + querystring.parse(data).text);
  // response.end();
  const form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    fs.renameSync(files.upload.path, "/tmp/success.png");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<img src='/show' />");
    response.end();
  });
}

function show(response) {
  fs.readFile("/tmp/success.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;