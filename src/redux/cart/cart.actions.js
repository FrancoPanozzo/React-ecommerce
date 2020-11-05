import { actionTypes } from './cart.types';

export const toggleShowCart = () => ({
  type: actionTypes.TOGGLE_CART_VISIBILITY,
});

export const setShowCart = (boolean) => ({
  type: actionTypes.SET_CART_VISIBILITY,
  payload: boolean,
});

export const addCartItem = (item) => ({
  type: actionTypes.ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (itemID) => ({
  type: actionTypes.REMOVE_CART_ITEM,
  payload: itemID,
});

export const decreaseCartItemCount = (itemID) => ({
  type: actionTypes.DECREASE_CART_ITEM_COUNT,
  payload: itemID,
});
