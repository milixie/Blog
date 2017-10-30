import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getInitialState() {
    return {liked: false}
  };
  handleClick(event) {
    console.log(111);
  };
  render() {
    const m = 20;
    const style = {
      fontSize: 20,
      color: 'red'
    };
    const array = [
      <li>苹果</li>,
      <li>栗子</li>
    ];
    // const component = React.createClass({
    //
    // });
    // this.liked = true;
    // this.handleClick = () => {
    //   this.liked = !this.liked;
    // };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React learn by mili for {this.props.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>计算题： 1 + 1 = {1+1}</p>
        <p>三元运算：m === 20 ? 'true': 'false'  ---  {m === 20 ? 'true': 'false'}</p>
        <p>内联样式：<span style={style}>这个字将会是红色大号的</span></p>
        <p>
          可以在这里渲染数据：
          <ul>{array}</ul>
        </p>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default App;
