const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', function sth() {
  emitter.on('myEvent', sth);
  console.log(111);
  // emitter.emit('myEvent');
});

// emitter.on('myEvent', function () {
//   console.log(222);
// });

emitter.emit('myEvent');