import './styles.scss';
import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';

function Header({ user, showCart }) {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          shop
        </Link>
        <Link to="/shop" className="option">
          contact
        </Link>

        {user ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            sign out
          </div>
        ) : (
          <Link to="/sign-in" className="option">
            sign in
          </Link>
        )}
        <CartIcon />
      </div>

      {showCart ? <CartDropdown /> : null}
    </header>
  );
}

// Make it so that the Header receives this info as props
const mapStateToProps = ({ user, showCart }) => ({
  user: user.user,
  showCart: showCart.showCart,
});

// Connecting the configuration of props stated above
export default connect(mapStateToProps)(Header);
// *higher order component
