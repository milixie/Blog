'use strict';

var x = 10;
var y = 20;

var add = function add(x, y) {
  return x + y;
};

var a = 3;

if (a < 10) {
  a = add(a, 1);
}

console.log(add(x, y), a);

var array = [{
  name: 'mili',
  age: 15
}, {
  name: 'yhc',
  age: 19
}];

array.map(function (item) {
  item.name = item.name + '-love';
  item.age += 2;
});

console.log(array);