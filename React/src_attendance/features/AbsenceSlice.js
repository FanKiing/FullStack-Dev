import { createSlice } from "@reduxjs/toolkit";

const absenceSlice = createSlice({
  name: "absences",
  initialState: {
    list: [],
    filterGroupe: "ALL"
  },
  reducers: {
    addAbsence(state, action) {
      const { cef, groupe, date } = action.payload;
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      state.list.push({ id, cef, groupe, date });
    },
     removeAbsence(state,action){
        const {cef}=action.payload;
        state.list=state.list.filter(s=>s.cef!==cef);
    },
   
    setFilterGroupeAbs(state, action) {
      state.filterGroupe = action.payload;
    }
  }
});

export const { addAbsence, setFilterGroupeAbs } = absenceSlice.actions;
export default absenceSlice.reducer;
