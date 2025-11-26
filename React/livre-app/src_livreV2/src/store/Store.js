import { configureStore } from "@reduxjs/toolkit";
import livreReducer from "../features/LivreSlice";

export const store=configureStore({
    reducer:{
    livre:livreReducer},
});