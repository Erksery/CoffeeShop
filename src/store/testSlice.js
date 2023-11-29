import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  dataCoffeeCart: [],
};

export const cartAddSlice = createSlice({
  name: 'cartData',
  initialState,
  reducers: {
    addCoffeeCart: (state, action) => {
      state.dataCoffeeCart = [...state.dataCoffeeCart, action.payload];
    },
    removeCoffee: (state, action) => {
      state.dataCoffeeCart.splice(action.payload, 1);
    },
  },
});

export const {addCoffeeCart, removeCoffee} = cartAddSlice.actions;

export default cartAddSlice.reducer;
