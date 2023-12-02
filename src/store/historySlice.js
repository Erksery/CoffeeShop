import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  historyCoffeeData: [],
};

export const historySlice = createSlice({
  name: 'favoriteData',
  initialState,
  reducers: {
    addCoffeeHistory: (state, action) => {
      state.historyCoffeeData = [...state.historyCoffeeData, action.payload];
    },
    removeCoffeeHistory: (state, action) => {
      state.historyCoffeeData = state.historyCoffeeData.filter(
        el => el.id !== action.payload.id,
      );
    },
  },
});

export const {addCoffeeHistory, removeCoffeeHistory} = historySlice.actions;

export default historySlice.reducer;
