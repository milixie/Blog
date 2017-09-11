/*
  一个简单的 clone 函数
 */

Object.prototype.clone = function () {
  const o = this.constructor === 'Array' ? [] : {};
  for (let e in this) {
    o[e] = typeof this[e] === 'object' ? this[e].clone() : this[e];
  }
  return o;
};