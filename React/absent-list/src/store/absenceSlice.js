import { createSlice } from "@reduxjs/toolkit";

const absenceSlice = createSlice({
  name: "absences",
  initialState: {
    list: [
      { id: "A1", cef: "CEF002", groupe: "G1", date: "2025-11-15" },
    ],
    filterGroupe: "ALL",
  },
  reducers: {
    addAbsence(state, action) {
      const { cef, groupe, date } = action.payload;
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      state.list.push({ id, cef, groupe, date });
    },
    setFilterGroupeAbs(state, action) {
      state.filterGroupe = action.payload;
    },
  },
});

export const { addAbsence, setFilterGroupeAbs } = absenceSlice.actions;

export default absenceSlice.reducer;
