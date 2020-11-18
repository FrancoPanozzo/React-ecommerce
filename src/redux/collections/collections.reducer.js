import { actionTypes } from './collections.types';
import collections from './collections-data';

const INITIAL_STATE = {
  collections,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
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

export default collectionsReducer;
