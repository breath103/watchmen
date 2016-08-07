import React, { Component } from 'react';

class IFrame extends Component {
  componentDidMount() {
    this.refs.iframe.addEventListener('load', this.props.onLoad);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.props.onChange();
    }
  }

  render() {
    return <iframe ref="iframe" {...this.props}/>;
  }
}
IFrame.propTypes = {
  src: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  onLoad: React.PropTypes.func,
};


export default IFrame;
