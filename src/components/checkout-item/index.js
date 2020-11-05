import React from 'react';
import { connect } from 'react-redux';
import {
  removeCartItem,
  decreaseCartItemCount,
  addCartItem,
} from '../../redux/cart/cart.actions';
import './styles.scss';

function CheckoutItem({
  item,
  item: { imageUrl, name, qty, price, id },
  removeCartItem,
  decreaseCartItemCount,
  addCartItem,
}) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseCartItemCount(id)}>
          &#10094;
        </div>
        <span className="value">{qty}</span>
        <div className="arrow" onClick={() => addCartItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeCartItem(id)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => {
    dispatch(addCartItem(item));
  },
  removeCartItem: (id) => {
    dispatch(removeCartItem(id));
  },
  decreaseCartItemCount: (id) => {
    dispatch(decreaseCartItemCount(id));
  },
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
