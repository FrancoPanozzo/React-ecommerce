import './styles.scss';
import React from 'react';

export default function Button({ children, extraClass, ...rest }) {
  return (
    <button className={`button ${extraClass}`} {...rest}>
      {children}
    </button>
  );
}
