

var a = 10;

var add = function add(val) {
  return val + a;
};

module.exports.a = a;
module.exports.add = add;

/*
 可以向 exports 对象添加方法
 */
exports.area = function (r) {
  return Math.PI * r * r;
};

var b = 3;

function changeB() {
  b++;
}

module.exports.b = b;
module.exports.changeB = changeB;