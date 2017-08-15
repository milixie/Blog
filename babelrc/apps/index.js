'use strict';
const x = 10;
const y = 20;

const add = function (x, y) {
  return x + y;
};

let a = 3;

if (a < 10) {
  a = add(a, 1);
}

console.log(add(x, y), a);

const array = [{
  name: 'mili',
  age: 15
}, {
  name: 'yhc',
  age: 19
}];

array.map(item => {
  item.name = `${item.name}-love`;
  item.age += 2;
});

console.log(array);


