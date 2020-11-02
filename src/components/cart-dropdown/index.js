import React from 'react';
import Button from '../button';
import './styles.scss';

export default function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button>buy now</Button>
    </div>
  );
}
