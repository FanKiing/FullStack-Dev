import { configureStore } from "@reduxjs/toolkit";
import StudRed from "./features/StagiaireSlice";
export const Store=configureStore({
    reducer:{
        StudentReducer:StudRed,
    }
});
export  Store;