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
    updateCartQuantity: (state, action) => {
      const { product_id, quantity, productSize } = action.payload;
      const item = state.cartItem.find(
        (item) =>
          item.product_id === product_id && item.productSize === productSize,
      );
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
      state.totalQuantity = state.cartItem.reduce(
        (acc, cur) => acc + cur.quantity,
        0,
      );
    },
    deleteCart: (state, action) => {
      const { product_id, productSize } = action.payload;
      state.cartItem = state.cartItem.filter(
        (item) =>
          !(item.product_id == product_id && item.productSize == productSize),
      );
      state.totalQuantity = state.cartItem.reduce(
        (acc, cur) => acc + cur.quantity,
        0,
      );
    },
  },
});

export const { addToCart, updateCartQuantity, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
