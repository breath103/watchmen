import React, { Component } from 'react';

class IFrame extends Component {
  componentDidMount() {
    this.refs.iframe.addEventListener('load', this.props.onLoad);
  }

  render() {
    return <iframe ref="iframe" {...this.props}/>;
  }
}
IFrame.propTypes = {
  src: React.PropTypes.string.isRequired,
  onLoad: React.PropTypes.func
};


export default IFrame;
