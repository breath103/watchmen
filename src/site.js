import React, { Component } from 'react';
import IFrame from './iframe';

class Site extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  loadComplete() {
    this.setState({
      loading: false
    });
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const timeformat = this.props.at.split('-').join('/');
    const url = `/store/${timeformat}/${this.props.siteId.toLowerCase()}.html`;
    return (
      <div style={{float: 'left', width: '25%'}}>
        <h1>
          {this.props.siteId}
        </h1>
        <div>
          <span style={{display: (this.state.loading ? 'block' : 'none')}}>Loading...</span>
          <IFrame style={{
                    height: '600px',
                    overflow: 'hidden',
                    border: '0px',
                    display: (!this.state.loading ? 'block' : 'none')
                  }}
                  src={url}
                  onLoad={this.loadComplete.bind(this)}>
          </IFrame>
        </div>
      </div>
    );
  }
}
Site.propTypes = {
  siteId: React.PropTypes.string.isRequired,
};

export default Site;
