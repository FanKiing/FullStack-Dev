import { createSlice } from "@reduxjs/toolkit";

const initialStagiaires = [
  { cef: "CEF001", nom: "Dupont", prenom: "Alice", groupe: "G1", noteDiscipline: 20 },
  { cef: "CEF002", nom: "Martin", prenom: "Bob", groupe: "G1", noteDiscipline: 20 },
  { cef: "CEF003", nom: "Nguyen", prenom: "Clara", groupe: "G2", noteDiscipline: 20 },
  { cef: "CEF004", nom: "Khan", prenom: "David", groupe: "G2", noteDiscipline: 20 },
  { cef: "CEF005", nom: "Smith", prenom: "Eva", groupe: "G3", noteDiscipline: 20 },
];

const stagiaireSlice = createSlice({
  name: "stagiaires",
  initialState: {
    list: initialStagiaires,
    filterGroupe: "ALL",
  },
  reducers: {
    setFilterGroupe(state, action) {
      state.filterGroupe = action.payload;
    },
    decrementNoteDiscipline(state, action) {
      const { cef, amount = 1 } = action.payload;
      const st = state.list.find((s) => s.cef === cef);
      if (st) {
        st.noteDiscipline = Math.max(0, st.noteDiscipline - amount);
      }
    },
  },
});

export const { setFilterGroupe, decrementNoteDiscipline } =
  stagiaireSlice.actions;

export default stagiaireSlice.reducer;
