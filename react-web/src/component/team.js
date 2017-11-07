'use strict';

import React from 'react';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        url: '',
        img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/6.jpg',
        detail: '团队成立于2011年'
      }, {
        url: '',
        img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/2.jpg',
        detail: '团队成立于2011年'
      }, {
        url: '',
        img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/3.jpg',
        detail: '团队成立于2011年'
      }, {
        url: '',
        img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/5.jpg',
        detail: '团队成立于2011年'
      }, {
        url: '',
        img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/4.jpg',
        detail: '团队成立于2011年'
      }, {
        url: '',
        img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/7.jpg',
        detail: '团队成立于2011年'
      }, {
        url: '',
        img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/1.jpg',
        detail: '团队成立于2011年'
      }, {
        url: '',
        img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/8.jpg',
        detail: '团队成立于2011年'
      }]
    };
    // this.showDialog = this.showDialog.bind(this);
  }
  render() {
    return (
      <div className="team-wrap">
        <ul className="team-content clear">
          {this.state.data.map((item, i) => (
            <li className="sub-team" key={i} onClick={this.props.showDialogClick}>
              <a href="javascript:void(0)">
                <img src={item.img} alt=""/>
                <p>{item.detail}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Team;