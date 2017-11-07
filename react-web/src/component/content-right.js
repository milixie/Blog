'use strict';

import React from 'react';
import Team from './team.js';
import Learn from './learn.js';

function Clock(time) {
  return (
    <div className="clock">
      输出当前时间： <span>{time}</span>
    </div>
  )
}

class ContentRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
      toggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  tick () {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }

  handleClick() {
    this.setState(state => ({
      toggleOn: !state.toggleOn
    }))
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="content-right">
        <Team show_dialog={this.props.show_dialog} showDialogClick={this.props.showDialogClick}/>
        <Learn course={this.props.course}/>
        <div>
          {Clock(new Date().toLocaleTimeString())}
        </div>
        <div className="now">{this.state.date}</div>
        <p>{this.state.toggleOn ? '开启' : '关闭'}</p>
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}

export default ContentRight;