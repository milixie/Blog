'use strict';
import React from 'react';
import logo from '../img/react.svg';

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
      nav_list: [{
        name: '首页',
        id: 'home'
      }, {
        name: '产品',
        id: 'product'
      }, {
        name: '博客',
        id: 'blog'
      }, {
        name: '关于我们',
        id: 'about'
      }]
    };
    this.handleSwitch = this.handleSwitch.bind(this)
  }
  handleSwitch() {

  }
  render() {
    const nav = this.state.nav_list;
    const nav_list = [];
    nav.forEach((item, i) => {
      nav_list.push(
        <li key={i} id={item.id} className={this.state.current === item.id ? 'active': ''} onClick={this.handleSwitch}><a href="javascript:void(0)">{item.name}</a></li>
      )
    });
    return (
      <div className="top-header flex between">
        <h3><img src={logo} alt="" className="logo"/>React</h3>
        <ul className="flex ul-list">
          {nav_list}
        </ul>
        <div className="search">
          <input type="text" className="search-box" placeholder="请输入搜索内容"/>
        </div>
        <div className="share">
          <a href="https://github.com/milixie" target="_blank">Github</a>
        </div>
      </div>
    )
  }
}

export default Top