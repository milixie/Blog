### js 函数调用的点点滴滴

```
/*
	js 函数调用的几种模式： this 指向
	1.方法调用
	2.正常调用
	3.构造函数调用
	4.apply/call 调用
 */

//方法调用
const base = {
	name: 'mili',
	age: null,
	setAge: function (age) {
		this.age = age;  //这里的 this 绑定的就是 base 这个对象
	}
};

//调用
base.setAge(20);

//正常调用
function baseInfo(name) {
	this.name = name;   //这里的 this 其实就是 window，this.name 其实就是 window.name,这样写相当于给 window 加了全局属性 name
}
baseInfo('mili');

//构造函数调用
function CreateInfo(name, age) {
	this.name = name;
	this.age = age;
	this.getInfo = function () {
		console.log(this.name, this.age);
	};
}

const info = new CreateInfo('mili', 20);  //这里使用 new 的方式去调用构造函数，this 绑定的将不是 window 全局对象，而是绑定到了新的这个 info 对象

/*
 apply vs call:
	他们都是 Function这个原型 prototype 上面自带的方法
	作用一样：都可以改变this 的指向，可以绑定this 的值，我们使用第二种的正常调用的方式的时候，this 的指向就是 window
	区别：传递参数的格式不同
 */
function setInfo(name, age) {
	this.name = name;
	this.age = age;
	console.log(this.name, this.age);
}
const obj_apply = {};
const obj_call = {};
//直接执行
setInfo.apply(obj_apply, ['mili', 20]);
setInfo.call(obj_call, 'mili', 20);

/*
	apply|call 与 bind 的区别
	apply and call 会直接执行，而使用 bind 的方式需要调用一下
	bind 的参数传递方式也是和 call 一样的
 */
const obj_bind = {};
const bind_result = setInfo.bind(obj_bind, 'mili', 20);  //不会执行
bind_result();  //执行

```