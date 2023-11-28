import {configureStore} from '@reduxjs/toolkit';
import cartAddSlice from './testSlice';

export const store = configureStore({
  reducer: {
    coffeeCart: cartAddSlice,
  },
});
