import React from 'react';

export const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  name,
  error = '',
  disabled = false,
}) => {
  return (
    <div className="form-control w-full max-w-md">
      {label && <label className="label text-sm font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`input input-bordered w-full ${
          error ? 'input-error' : ''
        }`}
      />
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
}