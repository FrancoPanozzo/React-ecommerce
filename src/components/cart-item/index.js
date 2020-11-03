import React from 'react';
import './styles.scss';

export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">
          {item.qty} x ${item.price}
        </span>
      </div>
    </div>
  );
}
