import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from './styles';
import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { selectUser } from '../../redux/user/user.selectors';
import { selectShowCart } from '../../redux/cart/cart.selectors';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';
import { createStructuredSelector } from 'reselect';

function Header({ user, showCart }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">shop</OptionLink>
        <OptionLink to="/shop">contact</OptionLink>

        {user ? (
          <OptionDiv
            onClick={() => {
              auth.signOut();
            }}
          >
            sign out
          </OptionDiv>
        ) : (
          <OptionLink to="/sign-in">sign in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>

      {showCart ? <CartDropdown /> : null}
    </HeaderContainer>
  );
}

// Make it so that the Header receives this info as props
const mapStateToProps = createStructuredSelector({
  user: selectUser,
  showCart: selectShowCart,
});

// Connecting the configuration of props stated above
export default connect(mapStateToProps)(Header);
// *higher order component
