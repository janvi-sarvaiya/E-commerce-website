import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistProducts: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.wishlistProducts.find(
        (item) => item.product_id === action.payload.product_id,
      );
      if (!existingItem) {
        state.wishlistProducts.push(action.payload);
      }
    },
    removeToWishlist: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.filter(
        (item) => item.product_id !== action.payload.product_id,
      );
    },
    clearWishlist: (state) => {
      state.wishlistProducts = [];
    },
  },
});

export const { addToWishlist, removeToWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
