const exec = require('child_process').exec;
const querystring = require('querystring');

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
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

  response.writeHead(200, {"content-type": "text/html"});
  response.write(body);
  response.end();
}
function upload(response, data) {
  console.log('upload page');
  response.writeHead(200, {"content-type": "text/plain"});
  response.write("get post data is " + querystring.parse(data).text);
  response.end();
}

exports.start = start;
exports.upload = upload;