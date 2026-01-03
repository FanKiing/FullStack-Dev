import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "../features/products/ProductSlice";
 
export const store = configureStore({
    reducer: {
        teams:teamsReducer
    }
});