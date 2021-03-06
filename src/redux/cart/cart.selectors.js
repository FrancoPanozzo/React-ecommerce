import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectShowCart = createSelector([selectCart], (cart) => {
  return cart.showCart;
});

export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.cartItems;
});

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((sum, item) => sum + item.qty, 0);
  }
);
