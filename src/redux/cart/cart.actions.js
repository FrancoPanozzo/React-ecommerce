import { actionTypes } from './cart.types';

export const toggleShowCart = () => ({
  type: actionTypes.TOGGLE_CART_VISIBILITY,
});

export const setShowCart = (boolean) => ({
  type: actionTypes.SET_CART_VISIBILITY,
  payload: boolean,
});
