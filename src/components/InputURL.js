import React, { PropTypes } from 'react';
import { PulseLoader } from 'halogen';
import Button from './common/Button';

class InputURL extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      url: "",
      valid: true
    };

    this.onURLChange = this.onURLChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onURLChange(event) {
    const newUrl = event.target.value;
    this.setState({ url : newUrl, valid: true });
  }

  onSubmit(event) {
    if(this.state.url !== "") {
      let fullURL = this.state.url;
      //Add https:// if not present on submitted URL
      if (!this.state.url.match(/^[a-zA-Z]+:\/\//)) {
        fullURL = 'https://' + this.state.url;
      }

      this.props.submitURL(fullURL);
      //Clear input box & reset validity
      this.setState({ url: "", valid: true });
    } else {
      //Empty URL is invalid
      this.setState({ valid: false });
    }
  }

  render() {
    return (
      <div className="url-input row">
        <input
          type="text"
          onChange={this.onURLChange}
          placeholder="Enter URL"
          value={this.state.url} />
        <Button onClick={this.onSubmit} label="Shorten it!"/>
        <div className="indicator">
          {this.props.isFetching &&
            <PulseLoader color="#0e48a5" size="10px" margin="4px"/>}
          {!this.state.valid &&
            <div className="error">Please enter a valid URL</div>}
        </div>
      </div>
    );
  }
}

InputURL.propTypes = {
  submitURL: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default InputURL;
