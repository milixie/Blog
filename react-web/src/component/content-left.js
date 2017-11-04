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
    
    nav_data.forEach((item, i) => {
      const sub_nav = [];
      if (item.sub_item.length > 0) {
        item.sub_item.forEach(sub => {
          sub_nav.push(<li className="child-li">{sub.name}</li>)
        })
      }

      render_nav.push(
        <li className="li-wrap" key={i} id={i}>
          <div className="parent-wrap">
            <p className={active === item.id ? 'parent-title active': 'parent-title'} onClick={(e) => (this.props.toggleSubNav(e))}>
              {item.title}
              <span className="add">{item.sub_item.length > 0 ? '+': ''}</span>
            </p>
            <ul className="child-wrap" style={{display: item.sub_item.length > 0 && item.show_item ? 'block': 'none'}}>
              {sub_nav}
            </ul>
          </div>
        </li>
      )
      
    });

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