const EventEmitter = require('events').EventEmitter;
module.exports = new EventEmitter();

setTimeout(function () {
  module.exports.emit('ready');
}, 2000);
