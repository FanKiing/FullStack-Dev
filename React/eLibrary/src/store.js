import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/books/booksSlice";
import cartReducer from "./features/cart/cartSlice";

export default configureStore({
  reducer: { books: booksReducer, cart: cartReducer },
});
