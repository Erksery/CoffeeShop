import {configureStore} from '@reduxjs/toolkit';
import cartAddSlice from './testSlice';
import favoriteSlice from './favoriteSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import historySlice from './historySlice';

const favoriteMiddleware = store => next => async action => {
  const state = store.getState();
  await AsyncStorage.setItem(
    'favorite',
    JSON.stringify(state.favoriteStore.favoriteCoffeeData),
  );

  return next(action);
};

export const store = configureStore({
  reducer: {
    coffeeCart: cartAddSlice,
    favoriteStore: favoriteSlice,
    historyStore: historySlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(favoriteMiddleware),
});
