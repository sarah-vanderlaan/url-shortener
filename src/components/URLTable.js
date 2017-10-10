import React, { PropTypes } from 'react';
import URLCard from './URLCard';
import Button from './common/Button';

const URLTable = ({ urls, clear }) => {
  return (
    <div className="url-table">
      <div className="title">My shortened links:</div>
      <Button onClick={clear} label="Clear History" />
      {urls.map((url, i) => <URLCard key={i} url={url}/>)}
    </div>
  );
};

URLTable.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.shape({
    shortUrl: PropTypes.string.isRequired,
    fullURL: PropTypes.string.isRequired
  })).isRequired,
  clear: PropTypes.func.isRequired
};

export default URLTable;
