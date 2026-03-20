import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice.js";
import wishlistReducer from "../features/wishlistSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
