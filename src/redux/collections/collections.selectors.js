import { createSelector } from 'reselect';

const collection_id_map = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectCollections = (state) => state.collections.collections;

// This selector is created based on a prop, you actually don't have a selector until you call it with a URLParam
export const selectCollection = (URLParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(({ id }) => id === collection_id_map[URLParam])
  );
