import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsArray = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
);

// This selector is created based on a prop, you actually don't have a selector until you call it with a URLParam
export const selectCollection = (URLParam) =>
  createSelector([selectCollections], (collections) => collections[URLParam]);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
