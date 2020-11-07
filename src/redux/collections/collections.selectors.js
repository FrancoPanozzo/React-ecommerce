import { createSelector } from 'reselect';

export const selectCollections = (state) => state.collections.collections;

export const selectCollectionsArray = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
);

// This selector is created based on a prop, you actually don't have a selector until you call it with a URLParam
export const selectCollection = (URLParam) =>
  createSelector([selectCollections], (collections) => collections[URLParam]);
