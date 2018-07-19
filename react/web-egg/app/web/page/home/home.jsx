import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import List from 'component/home/list.jsx';
import './home.css';
export default class Home extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    console.log(this.props)
    return <div>
      <div className="main">
        <div className="page-container page-component">
          <List list={this.props.data}></List>
        </div>
      </div>
    </div>;
  }
}
