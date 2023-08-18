// src/components/Button.js
import React from 'react';

const Button = ({ value, onClick }) => {
  return (
    <button className="btn btn-secondary calculator-button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
