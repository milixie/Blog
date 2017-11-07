# A demo for React

### `React` 学习记录

>- `React` 的渲染过程

>- `React` 的 `state` 状态，如何重置 `state`（`setState`）

>- `React` 的父子组件的传递，通过 `props`

>- 在函数中去改变 `state` 的值

```
如果直接这样设置：会报错，this指向不对
handleClick() {
	this.setState({toggleOn: !this.state.toggleOn})
}

需要这样

constructor(props) {
	super(props);
	this.state = {
		toggleOn: true
	};
	this.handleClick = this.handleClick.bind(this);
}

handleClick() {
	this.setState(prevState => ({
		toggleOn: !prevState.toggleOn
	}))
}

```

>- `React` 的 `list` 切换如何优雅的实现

>- `React` 的功用组件的编写

>- `React` 的 `router` 路由