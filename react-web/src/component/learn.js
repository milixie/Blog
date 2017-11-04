'use strict';

import React from 'react';

function Comment(props) {
  const items = [];
  props.course.forEach((item, i) => {
    items.push(
      <li key={i}>
        {item}
      </li>
    )
  });
  return (
    <ul className="course-wrap">
      {items}
    </ul>
  )
}

class Learn extends React.Component {
  render() {
    return Comment(this.props);
  }
}

export default Learn;