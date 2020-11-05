import React from 'react';
import './styles.scss';
import CheckoutItem from '../../components/checkout-item';
import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

function CheckoutPage({ cartItems, cartTotalPrice }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>total: ${cartTotalPrice}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
