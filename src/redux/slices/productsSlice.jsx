import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// Axios
import axios from "axios";
// Data

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get("https://dummyjson.com/products/category/groceries");
  return response.data.products;
});

const initialState = {
  data: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;
