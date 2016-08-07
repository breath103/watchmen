import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import IFrame from './iframe';

const S3_URL = 'http://watchmen-repo.s3-website.ap-northeast-2.amazonaws.com/store';

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
    const { at, siteId } = this.props;
    const timeformat = at.split('-').join('/');
    const url = `${S3_URL}/${timeformat}/${siteId.toLowerCase()}.html`;
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            display: (this.state.loading ? 'flex' : 'none'),
            'align-items': 'center',
            'justify-content': 'center',
          }}
        >
          <CircularProgress
            size={1.5}
          />
        </div>
        <IFrame
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            border: '0px',
            display: (!this.state.loading ? 'block' : 'none')
          }}
          src={url}
          onChange={() => this.setState({loading: true})}
          onLoad={() => this.setState({loading: false})}
        >
        </IFrame>
      </div>
    );
  }
}
Site.propTypes = {
  siteId: React.PropTypes.string.isRequired,
  at: React.PropTypes.string.isRequired,
};

export default Site;
