import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  priceState: 0,
};

export const priceSlice = createSlice({
  name: 'priceData',
  initialState,
  reducers: {
    addPrice: (state, action) => {
      state.priceState = action.payload;
    },
  },
});

export const {addPrice} = priceSlice.actions;

export default priceSlice.reducer;
