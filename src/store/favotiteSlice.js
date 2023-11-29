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
      state.favoriteCoffeeData.splice(action.payload, 1);
    },
  },
});

export const {addCoffeeFavorite, removeCoffeeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
