import React from 'react';

export const Button = ({
  text,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`btn btn-${variant} ${className}`}
    >
      {text}
    </button>
  );
};
