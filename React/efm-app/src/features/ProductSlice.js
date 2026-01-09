import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return [
      {
        id: 1,
        name: 'Nike Air Monarch IV',
        price: 140,
        promoPrice: 200,
        category: 'Sneakers',
        color: 'Black',
        rating: 4,
        image: 'https://via.placeholder.com/200'
      },
      {
        id: 2,
        name: 'Loafer Flats',
        price: 50,
        promoPrice: 90,
        category: 'Flats',
        color: 'White',
        rating: 5,
        image: 'https://via.placeholder.com/200'
      }
    ]
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    filters: {
      category: 'All',
      price: 'All',
      color: 'All',
      rating: 0
    },
    status: 'idle'
  },
  reducers: {
    setCategory: (state, action) => {
      state.filters.category = action.payload
    },
    setPrice: (state, action) => {
      state.filters.price = action.payload
    },
    setColor: (state, action) => {
      state.filters.color = action.payload
    },
    setRating: (state, action) => {
      state.filters.rating = action.payload
    },
    updateRating: (state, action) => {
      const product = state.items.find(p => p.id === action.payload.id)
      if (product) product.rating = action.payload.rating
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = 'success'
      })
  }
})

export const {
  setCategory,
  setPrice,
  setColor,
  setRating,
  updateRating
} = productSlice.actions

export default productSlice.reducer
