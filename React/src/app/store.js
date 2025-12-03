import { configureStore } from "@reduxjs/toolkit";
import stagiaireReducer from "../features/stagiaires/stagiaireSlice";

export const store = configureStore({
  reducer: {
    stagiaires: stagiaireReducer,
  },
});
