'use strict';
import React from 'react';

class ContentLeft extends React.Component {
  // state = {
  //   data: this.props.nav_data
  // };

  // toggleSubNav(e) {
  //   console.log(e.target);
  //   console.log(this.props);
  // }
  render() {
    const nav_data = this.props.data;
    const active = this.props.active;
    const render_nav = [];
    for (let i in nav_data) {
      const sub_nav = [];
      if (nav_data[i].sub_item.length > 0) {
        for (let j in nav_data[i].sub_item) {
          sub_nav.push(<li className="child-li">{nav_data[i].sub_item[j].name}</li>)
        }
      }
      render_nav.push(
        <li className="li-wrap" key={i} id={i}>
          <div className="parent-wrap">
            <p className={active === nav_data[i].id ? 'parent-title active': 'parent-title'} onClick={(e) => (this.props.toggleSubNav(e))}>
              {nav_data[i].title}
              <span className="add">{nav_data[i].sub_item.length > 0 ? '+': ''}</span>
            </p>
            <ul className="child-wrap" style={{display: nav_data[i].sub_item.length > 0 && nav_data[i].show_item ? 'block': 'none'}}>
              {sub_nav}
            </ul>
          </div>
        </li>
      )
    }
    return (
      <div className="content-left">
        <ul className="nav-wrap vflex">
          {render_nav}
        </ul>
      </div>
    );
  }
}

export default ContentLeft;