import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "1", nom: "CHAKIRI", prenom: "Laila", ville: "Fes", filiere: "Web full stack", photo: "photo2.jpg" },
    { id: "2", nom: "OUAFI", prenom: "Anass", ville: "Tanger", filiere: "Web designer", photo: "photo1.jpg" },
    { id: "3", nom: "BADRAOUI", prenom: "Ikram", ville: "Meknes", filiere: "Dev Mobile", photo: "photo4.jpg" },
    { id: "4", nom: "NACIRI", prenom: "Hassan", ville: "Casablanca", filiere: "Web full stack", photo: "photo3.jpg" },
  ],
  filterFiliere: "ALL",
  searchTerm: "",
};

const stagiairesSlice = createSlice({
  name: "stagiaires",
  initialState,
  reducers: {
    addStagiaire: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(payload) {
        return {
          payload: { id: nanoid(), ...payload },
        };
      },
    },
    deleteStagiaire(state, action) {
      state.items = state.items.filter((s) => s.id !== action.payload);
    },
    updateStagiaire(state, action) {
      const { id, changes } = action.payload;
      const idx = state.items.findIndex((s) => s.id === id);
      if (idx !== -1) state.items[idx] = { ...state.items[idx], ...changes };
    },
    setFilterFiliere(state, action) {
      state.filterFiliere = action.payload; 
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addStagiaire,
  deleteStagiaire,
  updateStagiaire,
  setFilterFiliere,
  setSearchTerm,
} = stagiairesSlice.actions;

export default stagiairesSlice.reducer;
