import React from 'react';
import { connect } from 'react-redux';
import { removeCartItem } from '../../redux/cart/cart.actions';
import './styles.scss';

function CheckoutItem({ item: { imageUrl, name, qty, price, id }, dispatch }) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{qty}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeCartItem(id))}
      >
        &#10005;
      </div>
    </div>
  );
}

export default connect(null)(CheckoutItem);
