## 关于设计模式

```
 window.onload = function () {
    /*
      工厂模式：
      1.将代码集中在一个位置防止代码重复
      2.解决了重复实例化的问题
     */
    function createObj(name, age, cb) {
      var obj = new Object(); //集中创建一个 obj
      obj.name = name;
      obj.age = age;
      obj.getInfo = function () {
        console.log(`Your name is ${obj.name}, age is ${obj.age}`);
      };
      return obj;
    }

    const test1 = createObj('mili', 13);

    test1.getInfo();

    /*
      构造函数模式
     */
    function Create(name, age) {
      this.name = name;
      this.age = age;
      this.getInfo = function () {
        console.log(`Your name is ${this.name}, age is ${this.age}`);
      };
    }

    const test2 = new Create('mili', 15);
    test2.getInfo();

    /*
      区别：
      1.构造函数方法没有显示的创建对象，没有通过 new Object() 的方法
      2.直接使用 this，将方法和属性赋值给 this
      3.没有 return 语句
     */

  };

```