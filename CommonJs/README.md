# CommonJs 规范

Learn commonJs

## 概述

Node 应用由模块组成，采用 CommonJs 模块规范

CommonJs 规范规定：每个模块内部，`module`变量表示当前模块，这个变量是一个对象，它的`exports`属性是对外的接口，加载该模块实际就是加载 `module.exports` 属性

```
//example.js
const x = 10;
const add = function (val) {
	return val + x;
};
module.exports.x = x;
module.exports.add = add;

//在另外一个文件中加载上面一个文件

const example = require('./example.js');

console.log(example.x, example.add(2));

```

CommonJs 特点

- 所有代码都运行在模块作用域，不会污染全局作用域。

- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。

- 模块加载的顺序，按照其在代码中出现的顺序。

## module 对象

Node 内部提供一个 Module 构建函数，所有模块都是他的实例

#### 它的属性：

```
module.id 模块的识别符，通常是带有绝对路径的模块文件名。
module.filename 模块的文件名，带有绝对路径。
module.loaded 返回一个布尔值，表示模块是否已经完成加载。
module.parent 返回一个对象，表示调用该模块的模块。
module.children 返回一个数组，表示该模块要用到的其他模块。
module.exports 表示模块对外输出的值。
```

#### module.exports 属性

```
const EventEmitter = require('events').EventEmitter;
module.exports = new EventEmitter();

setTimeout(function () {
  module.exports.emit('ready');
}, 2000);


const emit = require('./emit.js');
emit.on('ready', function () {
  console.log('this is ready');
});
```


#### exports 变量
```
/*
可以向 exports 对象添加方法
 */
exports.area = function (r) {
  return Math.PI * r * r;
};
```

一个模块的对外接口，不能使用 exports 输出，只能使用 module.exports 输出


## AMD规范 vs CommonJs 规范

#### 比较

1. CommonJs 规范加载模块是同步的，加载完成后才执行后面的操作；AMD 是非同步的，允许指定回调函数

2. 适用环境不同，NodeJs 是 commonJs 规范，浏览器端采用 AMD 规范

3. 定义方式不同，AMD 使用 `define` 定义模块

```
define(['package/lib'], function(){
	...
})
```

## require 命令

作用： 用于加载模块文件

后缀名默认为`.js`

#### 加载规则

1.以`/`开头，加载绝对路径的模块文件

2.以`./`开头，加载相对路径

3.不以以上两种方式，加载的是一个默认提供的核心模块，在安装包里面
```
require('bar.js')
```
4.不以以上两种方式，加载一个路径
```
require('example/exit.js')
```
5.如果指定文件没有找到，Node会尝试为文件名添加.js、.json、.node后，再去搜索。.js件会以文本格式的JavaScript脚本文件解析，.json文件会以JSON格式的文本文件解析，.node文件会以编译后的二进制文件解析。

6.如果想得到require命令加载的确切文件名，使用require.resolve()方法。

#### 模块缓存
模块加载完后就会缓存起来

```
require('./example.js')
require('./example.js').msg = 'hello commonjs';
const msg = require('./example.js').msg;

console.log(msg);  //hello commonjs
```

删除缓存

```
//删除某个模块的缓存
delete require.cache[example];

// 删除所有模块的缓存
Object.keys(require.cache).forEach(function(key) {
  delete require.cache[key];
});

```

## 模块加载机制

输入的是被输出的值的拷贝，一旦一个值已经输出，模块内部的变化并不会影响到他的值

```

var b = 3;

function changeB() {
  b++;
}

module.exports.b = b;
module.exports.changeB = changeB;

---

var b = require('./example.js').b;
var changeB = require('./example.js').changeB;

console.log(b);  //3
changeB();
console.log(b);  //3
```























