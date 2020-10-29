import './styles.scss';
import React from 'react';

export default function FormInput({ handleChange, label, ...rest }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...rest} />
      {label && (
        <label className={`form-input-label ${rest.value.length && 'shrink'}`}>
          {label}
        </label>
      )}
    </div>
  );
}
