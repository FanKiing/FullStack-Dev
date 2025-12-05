import { configureStore } from "@reduxjs/toolkit";
import stagiaireReducer from "../features/StagiaireSlice";
import absenceReducer from "../features/AbsenceSlice";

export const store = configureStore({
  reducer: {
    stagiaires: stagiaireReducer,
    absences: absenceReducer
  }
});

export default store;
