import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./app/userSlice";
import productReducer from "./app/productSlice";
import cartReducer from "./app/cartSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
