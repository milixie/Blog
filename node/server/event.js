const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', function () {
  console.log(111);
});

emitter.on('myEvent', function () {
  console.log(222);
});

emitter.emit('myEvent');