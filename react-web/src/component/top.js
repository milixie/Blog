'use strict';
import React from 'react';
import logo from '../img/react.svg';

class Top extends React.Component {
  render() {
    return (
      <div className="top-header flex between">
        <h3><img src={logo} alt="" className="logo"/>React</h3>
        <ul className="flex ul-list">
          <li className="active"><a href="">首页</a></li>
          <li><a href="">产品</a></li>
          <li><a href="">博客</a></li>
          <li><a href="">关于我们</a></li>
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