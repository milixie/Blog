class Points{
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.m = 'test';
    console.log(11);
  }
  getValue() {
    return this.x;
  }
}

Points.prototype.n = 2;

class ColorPoint extends Points {
  /*
    这里子类构造函数中调用 super有两种形式
      1. 以函数的形式去调用 super()
      2. 以对象的形式去调用 super.getValue()
      super 调用父类的方法时，super 会绑定到子类的 this
      如果直接在子类中 log super 会报错，它出现必须以函数和对象的形式使用
   */
  constructor(x, y, color) {
    super(x, y);  //子类构造函数中必须调用一次 super
    this.color = color;
    console.log('这里能拿到父类实例中定义的元素吗', super.m);  //undefined 拿不到， m 是父类实例的属性
    console.log('这里能拿到父类原型中定义的元素吗', super.n);  //2 能拿到
    console.log('通过 super 以对象的形式去调用一下父类的一个函数', super.getValue());
  }

  toString() {
    console.log(`${this.color}:${this.x},${this.y}`);
    return this.color + this.x + this.y;
  }
}

const c = new ColorPoint(255, 255, 'white');


c.toString();
console.log(c);

const pro = Object.getPrototypeOf(ColorPoint) === Points;
console.log(pro);

const p = new Points(0, 0);

class A1 {
  constructor() {
    this.x = 1;
  }
  getV() {
    console.log('父类 A1 中定义x 是1，在子类中还是1吗', this.x);
  }
}

class B1 extends A1 {
  constructor() {
    super();
    this.x = 2;
  }
  getVal() {
    super.getV();
  }
}

const b1 = new B1();
b1.getVal();


class A2 {
  constructor() {
    this.x = 1;
  }
}

class B2 extends A2 {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;  //这里的 super 相当于是 this
    console.log('使用 super直接在子类中定义 super.x = 3，打印出来的super.x = ', super.x);  //这里 super 是
    console.log('使用 super.x = 3 定义完后 this.x = ', this.x);
  }
}

const b2 = new B2();

console.log(B2.__proto__ === A2);
console.log(B2.prototype.__proto__ === A2.prototype);
