var example = require('./example.js');
var emit = require('./emit.js');

console.log(example.a, example.add(20)); //10, 30
console.log(example.area(5));

emit.on('ready', function () {
  console.log('this is ready');
});

require('./example.js');
require('./example.js').msg = 'hello commonjs';
var msg = require('./example.js').msg;

console.log(msg);

//删除某个模块的缓存
delete require.cache[example];

// 删除所有模块的缓存
Object.keys(require.cache).forEach(function (key) {
  delete require.cache[key];
});

console.log(require('./example.js').msg);

var b = require('./example.js').b;
var changeB = require('./example.js').changeB;

console.log(b);
changeB();
console.log(b);