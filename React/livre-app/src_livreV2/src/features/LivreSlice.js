import { createSlice } from "@reduxjs/toolkit";

const LivreSlice = createSlice({
  name: "livre",
  // état initial : un tableau de livres
  initialState: [],
  // IMPORTANT : clé = "reducers" (pas "reducer")
  reducers: {
    AddLivre: (state, action) => {
      // action.payload doit être l'objet livre { isbn, titre, auteur, ... }
      const p = state.find((item) => item.isbn === action.payload.isbn);
      if (!p) {
        state.push(action.payload);
      }
    },

    // remove attend action.payload = { isbn: "..." } (consistence)
    remove: (state, action) => {
      return state.filter((item) => item.isbn !== action.payload);
    },

    // del attend action.payload = isbn (une simple string)
    del: (state, action) => {
      const pos = state.findIndex((item) => item.isbn === action.payload);
      if (pos !== -1) {
        state.splice(pos, 1);
      }
    },

    // Modifier : payload = objet livre complet (avec isbn)
    Modifier: (state, action) => {
      const pos = state.findIndex((item) => item.isbn === action.payload.isbn);
      if (pos !== -1) {
        // Remplace l'élément (immuable fait par immer sous le capot)
        state[pos] = action.payload;
      }
    },

    // ModifierV2 : payload = { isbn, changes } -> merge des changements
    ModifierV2: (state, action) => {
      const { isbn, changes } = action.payload;
      const pos = state.findIndex((item) => item.isbn === isbn);
      if (pos !== -1) {
        state[pos] = { ...state[pos], ...changes };
      }
    },
  },
});

export const { AddLivre, remove, del, Modifier, ModifierV2 } = LivreSlice.actions;
export default LivreSlice.reducer;
