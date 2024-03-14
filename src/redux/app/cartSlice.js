// eslint-disable-next-line no-unused-vars
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: null,
  cart: [],
};
const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItemFromCart: () => {},
  },
});

export default cartsSlice.reducer;
export const { removeItemFromCart } = cartsSlice.actions;
