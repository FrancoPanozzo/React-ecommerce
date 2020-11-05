import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../button';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleShowCart } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item';
import './styles.scss';

function CartDropdown({ cartItems, history, toggleShowCart }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          toggleShowCart();
          history.push('/pay');
        }}
      >
        buy now
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => {
    dispatch(toggleShowCart());
  },
});

// Connecting the configuration of props stated above
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
