import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import InputURL from './InputURL';
import URLTable from './URLTable';
import * as urlActions from '../actions/urlActions';

export class UnwrappedApp extends React.Component {
  render() {
    let title = "Shooooort";
    let subtitle = "The link shortener with a long name";
    let urlsExist = this.props.urls.length > 0;

    return (
      <div>
        <div className="app-title">
          <div className="main">{title}</div>
          <div className="sub">{subtitle}</div>
        </div>
        <InputURL
          submitURL={this.props.shortenURL}
          isFetching={this.props.isFetching}/>

        {/* No need to show URLTable component if no urls present */}
        {urlsExist &&
          <URLTable urls={this.props.urls} clear={this.props.clearURLs}/>}
      </div>
    );
  }
}

UnwrappedApp.propTypes = {
  shortenURL: PropTypes.func.isRequired,
  urls: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  clearURLs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  urls: state.urls,
  isFetching: state.isFetching
});

const mapDispatchToProps = dispatch => ({
  shortenURL: url => dispatch(urlActions.shortenURL(url)),
  clearURLs: () => dispatch(urlActions.clearURLs())
});

export default connect(mapStateToProps,mapDispatchToProps)(UnwrappedApp);
