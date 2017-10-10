import React, { PropTypes } from 'react';

const URLCard = ({ url }) => {

  //Truncate really long urls (arbitrarily chose 70 chars here)
  let truncatedURL = url.fullURL;
  if(url.fullURL.length > 70) {
    truncatedURL = url.fullURL.slice(0,70) + "...";
  }

  return (
    <div className="url-card">
      <a href={url.fullURL} target="_blank">
        <span className="shortcode">{url.shortUrl}</span>
      </a>
      <div className="full-url">{truncatedURL}</div>
    </div>
  );
};

URLCard.propTypes = {
  url: PropTypes.shape({
    shortUrl: PropTypes.string.isRequired,
    fullURL: PropTypes.string.isRequired
  }).isRequired
};

export default URLCard;
