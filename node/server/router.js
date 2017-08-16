function route(handle, pathname, response, data) {
  console.log('A request route is ', pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, data);
  } else {
    console.log('No request handler found for ' + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write('404!!!');
    response.end();
  }
}

exports.route = route;