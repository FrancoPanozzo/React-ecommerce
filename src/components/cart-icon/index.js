import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './styles.scss';
import { connect } from 'react-redux';
import { toggleShowCart } from '../../redux/cart/cart.actions';

function CartIcon({ toggleShowCart, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleShowCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = ({ cart }) => ({
  itemCount: cart.cartItems.reduce((sum, item) => sum + item.qty, 0),
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => {
    dispatch(toggleShowCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
