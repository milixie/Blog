## Promise

### 关于 Promise

Promise 是一个构造函数，自身的方法有 all/race/resolve/reject 等方法，原型上面有 then、cache 方法

### Promise 用法

```
function render1() {
	const p = new Promise(function(resolve, reject){
		resolve('第一个成功的');
	});
	return p;
}

render1().then(function(data){
	console.log(data);
}).cache(function(err){
	console.log(err);
});

function render2() {
	const p = new Promise(function(resolve, reject){
		resolve('第2个成功的');
	});
	return p;
}

render2().then(function(data){
	console.log(data);
}).cache(function(err){
	console.log(err);
});

const a = Promise.all([render1(), render2()]);
a.then(function(data){
	console.log(data);  //['第一个成功的', '第2个成功的']
}).cache(function(err) {

});

```

>- resolve: 是函数调用成功后执行的函数

>- reject: 是函数调用失败后执行的函数

>- all: 表示并行执行异步，等他们都执行结束后，才会进到 `then` 里面，返回的是一个数组

>- race: 表示异步执行，但是不会等待所有的都执行结束就会进到 `then` 里面，但是没有执行结束的还会继续执行