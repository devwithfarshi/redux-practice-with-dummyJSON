// eslint-disable-next-line no-unused-vars
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const loginUser=createAsyncThunk(
    "auth/login",
    ({username, password })=>{
        axios.post("https://dummyjson.com/auth/login",{
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                   username: 'kminchelle',
                   password: '0lelplR',
            })
        }).then(data=>data)
            .catch(error=>error)
    }
)


const initialState = {
  loading: false,
  error: null,
  userInfo: {},
  token:null,
success:false
};
const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: { },
  extraReducers: {
    // register user
    [loginUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
      state.userInfo=payload
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
}});

export default usersSlice.reducer;
