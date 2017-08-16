const server = require('./server');
const router = require('./router');
const request_handlers = require('./requestHandlers');

const handle = {};
handle['/'] = request_handlers.start;
handle['/start'] = request_handlers.start;
handle['/upload'] = request_handlers.upload;
handle['/show'] = request_handlers.show;

server.start(router.route, handle);