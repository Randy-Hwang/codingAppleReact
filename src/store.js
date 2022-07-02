import { configureStore } from "@reduxjs/toolkit";
import cartItem from "./store/cartSlice";

export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
  },
});
