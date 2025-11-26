import { configureStore } from "@reduxjs/toolkit";
import livreReducer from "../features/LivreSlice";

export const store=configureStore({
    livre:livreReducer,
})