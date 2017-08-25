/*
  js继承的几种方式
  1.原型继承
  2.构造函数继承
  3.原型 + 构造函数
 */

//先有一个主函数，别的函数去继承这个函数
function Person(name, age, work) {
  this.name = name;
  this.age = age;
  this.work = work;
  this.getInfo = function () {
    console.log(`Name: ${this.name}, age: ${this.age}, work: ${this.work}`);
  }
}

//原型继承
function Student() {
}

Student.prototype = new Person();
Student.prototype.constructor = Student;
Student.prototype.name = 'mili';
Student.prototype.age = 12;
Student.prototype.work = 'IT';
Student.prototype.love = 'learn';
const stu = new Student();

console.log('this stu name is ', stu.name, stu.love);
stu.getInfo();

/*
  构造函数继承
  call or apply
  Person.call(this);
  Person.apply(this, arguments);
 */
function Teach(name) {
  Person.call(this);
  this.name = name;
}

const teacher = new Teach('xh');
console.log(teacher);
teacher.getInfo();

//组合继承

