import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    return [
      { id: 1, title: 'React', likes: 0 },
      { id: 2, title: 'Redux', likes: 2 },
      { id: 3, title: 'Jest', likes: 1 }
    ]
  }
)

const booksSlice = createSlice({
name: 'books',
initialState: {
items: [],
image:"",
rating:0,
status: 'idle',
search: ''
},
reducers: {
    addBook: (state, action) => {
    state.items.push(action.payload)
    },
editBook: (state, action) => {
    const index = state.items.findIndex(b => b.id === action.payload.id)
    state.items[index] = action.payload
    },
deleteBook: (state, action) => {
    state.items = state.items.filter(b => b.id !== action.payload)
    },
addLike: (state, action) => {
    const book = state.items.find(b => b.id === action.payload)
    book.likes++
    },
setSearch: (state, action) => {
    state.search = action.payload
    },
modifyRating:(state, action) => { 
    const { id, rating } = action.payload 
    const book = state.items.find(b => b.id === id) 
    if(book) book.rating = rating }
},
extraReducers: builder => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
    state.status = 'succeeded'
    state.items = action.payload
    })
}
})


export const { addBook, editBook, deleteBook, addLike, setSearch,modifyRating} = booksSlice.actions
export default booksSlice.reducer