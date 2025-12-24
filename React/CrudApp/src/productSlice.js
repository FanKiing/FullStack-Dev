import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { apiFetchProducts, apiAddProduct, apiEditProduct, apiDeleteProduct } from "./productAPI";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  return await apiFetchProducts();
});

export const addProduct = createAsyncThunk("products/add", async (payload) => {
  const product = { id: nanoid(), ...payload };
  return await apiAddProduct(product);
});

export const editProduct = createAsyncThunk("products/edit", async (product) => {
  return await apiEditProduct(product);
});

export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  return await apiDeleteProduct(id);
});

const initialState = {
  items: [],
  search: "",
  category: "ALL",
  priceMin: 0,
  priceMax: 999999,
  status: "idle",
  error: null,
  editing: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPriceRange(state, action) {
      const { min, max } = action.payload;
      state.priceMin = Number(min);
      state.priceMax = Number(max);
    },
    startEdit(state, action) {
      state.editing = action.payload;
    },
    cancelEdit(state) {
      state.editing = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || "Failed to fetch";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.items = state.items.map((p) => (p.id === action.payload.id ? action.payload : p));
        state.editing = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
      });
  },
});

export const { setSearch, setCategory, setPriceRange, startEdit, cancelEdit } = productsSlice.actions;

export const selectVisibleProducts = (state) => {
  const { items, search, category, priceMin, priceMax } = state.products;
  const s = search.trim().toLowerCase();
  return items.filter((p) => {
    const matchName = !s || p.name.toLowerCase().includes(s);
    const matchCat = category === "ALL" || p.category === category;
    const matchPrice = Number(p.price) >= priceMin && Number(p.price) <= priceMax;
    return matchName && matchCat && matchPrice;
  });
};

export default productsSlice.reducer;
