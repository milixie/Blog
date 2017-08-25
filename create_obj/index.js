/*
  创建对象的几种方式：
  1.字面量对象
  2.Object构造函数
  3.构造函数
  4.原型
  5.工厂模式
  6.原型 + 构造函数
 */

//字面量对象

const obj1 = {
  name: 'mili'
};

//Object构造函数

const obj2 = new Object();
obj2.name = 'mili';

//构造函数
function CreateObj1(name) {
  this.name = name;
}

const obj3 = new CreateObj1('mili');

//原型

function CreateObj2(name) {
  Object.prototype.name = name;
}

const obj4 = new CreateObj2('mili');

//工厂模式

function createObj3(name) {
  const obj = {};
  obj.name = name;
  return obj;
}

const obj5 = createObj3('mili');

//原型 + 构造函数
function CreateObj4(name) {
  this.name = name;
}

CreateObj4.prototype = {
  constructor: CreateObj4,
  getInfo: function () {
    console.log(this.name);
  }
};

const obj6 = new CreateObj4('mili');
