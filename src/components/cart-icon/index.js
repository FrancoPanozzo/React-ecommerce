import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './styles.scss';
import { connect } from 'react-redux';
import { toggleShowCart } from '../../redux/cart/cart.actions';

function CartIcon({ toggleShowCart }) {
  return (
    <div className="cart-icon" onClick={toggleShowCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => {
    dispatch(toggleShowCart());
  },
});

export default connect(null, mapDispatchToProps)(CartIcon);
