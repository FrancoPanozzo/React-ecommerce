import { actionTypes } from './cart.types';

const INITIAL_STATE = {
  showCart: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case actionTypes.SET_CART_VISIBILITY:
      return {
        ...state,
        showCart: !!action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
