// eslint-disable-next-line no-unused-vars
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  error: null,
  userInfo: {},
  message: "",
};
const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
