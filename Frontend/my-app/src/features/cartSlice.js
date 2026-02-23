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
      const item = action.payload;
      const existingItem = state.cartItem.find(
        ({ product_id }) => product_id === item.product_id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItem.push({ ...item, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
