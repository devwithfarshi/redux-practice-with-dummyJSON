// eslint-disable-next-line no-unused-vars
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          // expiresInMins: 60, // optional
        }),
      });
      const result = await res.json();
      localStorage.setItem("userToken", result.token);
      if (result.id) {
        return result;
      }
      return rejectWithValue(result.message);
    } catch (error) {
      console.log(error);
    }
  }
);



export const getAuthUser = createAsyncThunk(
  "auth/getAuthUser",
  async ( token, { rejectWithValue }) => {
  console.log(token)
    try {
  const res=await fetch('https://dummyjson.com/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer '+token, 
  }, 
})

const results = await res.json()

//alert(JSON.stringify({results}))
return results 
    } catch (error) {
      console.log(error);
      //alert(JSON.stringify({error}))
    }
  }
);



const token = localStorage.getItem("userToken") !== null ? localStorage.getItem("userToken") :null

const initialState = {
  loading: false,
  error: null,
  userInfo: {},
  token,
  isLogin: false,
};
const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userInfo = action.payload;
      state.token = action.payload.token;
      state.isLogin = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.isLogin = false;
      state.error = action.payload;
    });
    
    //get auth user
    
    
    builder.addCase(getAuthUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAuthUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userInfo = action.payload;
      state.token = action.payload.token;
      state.isLogin = true;
    });
    builder.addCase(getAuthUser.rejected, (state, action) => {
      state.loading = false;
      state.isLogin = false;
      state.error = action.payload;
    });
    
  },
});

export default usersSlice.reducer;
