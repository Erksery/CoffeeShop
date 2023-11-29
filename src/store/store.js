import {configureStore} from '@reduxjs/toolkit';
import cartAddSlice from './testSlice';
import favotiteSlice from './favotiteSlice';

export const store = configureStore({
  reducer: {
    coffeeCart: cartAddSlice,
    favoriteStore: favotiteSlice,
  },
});
