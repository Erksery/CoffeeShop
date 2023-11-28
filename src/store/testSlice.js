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
  },
});

export const {addCoffeeCart} = cartAddSlice.actions;

export default cartAddSlice.reducer;
