import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import sectionsReducer from './sections/sections.reducer';
import collectionsReducer from './collections/collections.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  sections: sectionsReducer,
  collections: collectionsReducer,
});

export default persistReducer(persistConfig, rootReducer);
