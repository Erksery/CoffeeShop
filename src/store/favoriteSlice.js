import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favoriteCoffeeData: [],
};

export const favoriteSlice = createSlice({
  name: 'favoriteData',
  initialState,
  reducers: {
    addCoffeeFavorite: (state, action) => {
      state.favoriteCoffeeData = [...state.favoriteCoffeeData, action.payload];
    },
    removeCoffeeFavorite: (state, action) => {
      state.favoriteCoffeeData = state.favoriteCoffeeData.filter(
        el => el.id !== action.payload.id,
      );
    },
  },
});

export const {addCoffeeFavorite, removeCoffeeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
