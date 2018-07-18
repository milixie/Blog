import React from 'react'
import ReactDom from 'react-dom'

function clock() {
  return new Date().toLocaleTimeString()
}

class CurrentTime extends React.Component {

  render() {
    let time = clock()
    setInterval(() => {
      time = clock()
    }, 1000)
    return (
      <div>
        当前时间是：{time}
      </div>
    )
  }
}

