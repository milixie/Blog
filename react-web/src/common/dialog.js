import React from 'react';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dialog" style={{display: this.props.show_dialog ? 'block': 'none'}}>
        <div className="msg-wrap vflex">
          <div>{this.props.msg}</div>
          <div className="flex sure-cancel">
            <div className="cancel flex1" onClick={this.props.handleCancel}>取消</div>
            <div className="sure flex1" onClick={this.props.handleSure}>确定</div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Dialog;