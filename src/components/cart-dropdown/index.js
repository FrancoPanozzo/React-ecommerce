import React from 'react';
import { connect } from 'react-redux';
import Button from '../button';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item';
import './styles.scss';

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>buy now</Button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

// Connecting the configuration of props stated above
export default connect(mapStateToProps)(CartDropdown);
