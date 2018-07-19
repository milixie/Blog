'use strict';

import './list.scss'
import React, { Component } from 'react';

export default class List extends Component {
  componentDidMount() {
    window.addEventListener('scroll', ()=>{

    }, false);
  }

  render() {
    return (
      <ul className="list-wrap">
        {this.props.list.map(function(item) {
          return (
            <li key={item.id}>
              <p>{item.name}-{item.country}</p>
              <img src={item.img} alt=""/>
            </li>
          )
        })}
      </ul>
    )
  }
}
