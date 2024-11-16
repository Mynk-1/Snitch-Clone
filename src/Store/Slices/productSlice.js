// src/features/productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    clickedProduct: {}
  },
  reducers: {
    setClickedProduct: (state, action) => {
      state.clickedProduct = action.payload;
    },
    clearClickedProduct: (state) => {
      state.clickedProduct = {};
    }
    
  }
});

export const { setClickedProduct, clearClickedProduct } = productSlice.actions;

export default productSlice.reducer;
