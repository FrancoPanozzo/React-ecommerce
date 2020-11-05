import { actionTypes } from './cart.types';

const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
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

    case actionTypes.ADD_CART_ITEM:
      // Function needs to be reestructured to be more readable
      let items = [];
      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        items = state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        items = [...state.cartItems, { ...action.payload, qty: 1 }];
      }
      return {
        ...state,
        cartItems: items,
      };

    case actionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(({ id }) => id !== action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
