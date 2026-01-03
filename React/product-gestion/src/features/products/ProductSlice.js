import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return [
      { id: 1, name: "Laptop", category: "Electronics" },
      { id: 2, name: "Phone", category: "Electronics" },
    ];
  }
);

const initialState = {
  products: [],
  search: "",
  category: "",
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchByName: (state, action) => {
      state.search = action.payload;
    },
    filterByCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || "Fetch failed";
      });
  },
});

export const { searchByName, filterByCategory } = productSlice.actions;
export default productSlice.reducer;
