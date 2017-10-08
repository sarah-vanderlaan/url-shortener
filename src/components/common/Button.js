import React, { PropTypes } from 'react';

const Button = ({ onClick, label }) => (
  <button className="button" type="submit" onClick={onClick}>
      {label || ""}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string
};

export default Button;
