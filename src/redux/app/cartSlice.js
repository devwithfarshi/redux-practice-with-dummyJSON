// eslint-disable-next-line no-unused-vars
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  error: null,
  cart: [],
  message: "",
};
const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartsSlice.reducer;
