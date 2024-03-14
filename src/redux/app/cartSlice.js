// eslint-disable-next-line no-unused-vars
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: null,
  cart: [],
};
const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
      
  },
});

export default cartsSlice.reducer;
