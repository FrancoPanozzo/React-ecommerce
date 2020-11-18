import { actionTypes } from './collections.types';

export const updateCollections = (collectionsMap) => ({
  type: actionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
