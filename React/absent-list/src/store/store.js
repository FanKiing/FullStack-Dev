import { configureStore } from "@reduxjs/toolkit";
import stagiaireReducer from "./stagiaireSlice";
import absenceReducer from "./absenceSlice";

const store = configureStore({
  reducer: {
    stagiaires: stagiaireReducer,
    absences: absenceReducer,
  },
});

export default store;
