'use strict';

import React from 'react';
import '../styles/app.scss';
import Top from './top.js';
import ContentLeft from './content-left.js';
import ContentRight from './content-right.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'overview',
      nav_data: [{
        title: '项目概览',
        id: 'overview',
        show_item: false,
        sub_item: []
      }, {
        title: '产品管理',
        id: 'product',
        show_item: false,
        sub_item: []
      }, {
        title: '营销统计',
        id: 'market',
        show_item: false,
        sub_item: [{
          name: '营销案例'
        }, {
          name: '优惠券统计'
        }, {
          name: '回头率统计'
        }]
      }, {
        title: '市场活动',
        id: 'activities',
        show_item: false,
        sub_item: [{
          name: '推广活动'
        }, {
          name: '前期活动统计'
        }]
      }, {
        title: '销售概况',
        id: 'sale',
        show_item: false,
        sub_item: [{
          name: '成功案例'
        }, {
          name: '销售成本统计'
        }, {
          name: '销售明细统计'
        }]
      }, {
        title: '1号团队风采',
        id: 'team1',
        show_item: false,
        sub_item: []
      }, {
        title: '2号团队风采',
        id: 'team2',
        show_item: false,
        sub_item: []
      }, {
        title: '3号团队风采',
        id: 'team3',
        show_item: false,
        sub_item: []
      }, {
        title: '4号团队风采',
        id: 'team4',
        show_item: false,
        sub_item: []
      }, {
        title: '5号团队风采',
        id: 'team5',
        show_item: false,
        sub_item: []
      }, {
        title: '6号团队风采',
        id: 'team6',
        show_item: false,
        sub_item: []
      }, {
        title: '后期维护',
        id: 'maintain',
        show_item: false,
        sub_item: [{
          name: '联系我们'
        }, {
          name: '常见问题'
        }]
      }],
      course: ['语文', '数学', '英语']
    }
  }
  toggleSubNav(e) {
    const id = Number(e.target.parentElement.parentElement.id || e.target.parentElement.parentElement.parentElement.id);
    const data = this.state.nav_data;
    data[id].show_item = !data[id].show_item;
    data.map((item, i) => {
      if (id !== i) {
        data[i].show_item = false;
      }
    });
    this.setState({
      nav_data: data,
      active: data[id].id
    });
  }
  render() {
    return (
      <div className="pages">
        <Top/>
        <div className="content flex">
          <ContentLeft active={this.state.active} data={this.state.nav_data} toggleSubNav={(e) => this.toggleSubNav(e)}/>
          <ContentRight course={this.state.course}/>
        </div>
      </div>
    );
  }
}

React.render(<App/>, document.getElementById('app'));