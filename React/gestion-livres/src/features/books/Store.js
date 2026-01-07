import { configureStore } from '@reduxjs/toolkit'
import  bookreducer from './BooksSlice';

const store = configureStore({
  reducer: {
    books: bookreducer
  }
})

export default store
