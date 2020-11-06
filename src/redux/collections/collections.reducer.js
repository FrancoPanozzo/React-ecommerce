import { actionTypes } from './collections.types';
import collections from './collections-data';

const INITIAL_STATE = {
  collections,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionsReducer;
