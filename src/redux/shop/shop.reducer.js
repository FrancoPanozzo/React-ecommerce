import { actionTypes } from './shop.types';
import collections from './collections-data';

const INITIAL_STATE = {
  collections,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
