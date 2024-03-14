// eslint-disable-next-line no-unused-vars
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getAllProduct=createAsyncThunk(
    "product/getAllProduct",
    async()=> { 
    try{
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res.data)
        return res.data.products  
    } catch(err) {
        alert(JSON.stringify({err}))
        console.log({err})
    }
        
    
})
const initialState = {
  loading: false,
  error: null,
  products: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
     builder.addCase(getAllProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      state.loading = false;
      
      state.error = action.payload;
    });
  }
});

export default productsSlice.reducer;
