import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity, productSize } = action.payload;
      const existingItem = state.cartItem.find(
        ({ product_id, size }) =>
          product_id === product.product_id && size == productSize,
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItem.push({ ...product, quantity, productSize });
      }
      state.totalQuantity += quantity;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
