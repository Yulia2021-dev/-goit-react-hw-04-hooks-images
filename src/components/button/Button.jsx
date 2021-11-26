import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ onClick }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;