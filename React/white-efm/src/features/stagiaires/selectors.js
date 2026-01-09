import { createSelector } from "@reduxjs/toolkit";

export const selectStagiaires = (state) => state.stagiaires.items;
export const selectFilterFiliere = (state) => state.stagiaires.filterFiliere;
export const selectSearchTerm = (state) => state.stagiaires.searchTerm;

export const selectDistinctFilieres = createSelector([selectStagiaires], (items) => {
  const set = new Set(items.map((s) => s.filiere).filter(Boolean));
  return ["ALL", ...Array.from(set)];
});

export const selectFilteredStagiaires = createSelector(
  [selectStagiaires, selectFilterFiliere, selectSearchTerm],
  (items, filterFiliere, searchTerm) => {
    const q = (searchTerm || "").trim().toLowerCase();

    return items.filter((s) => {
      const matchFiliere = filterFiliere === "ALL" ? true : s.filiere === filterFiliere;

      const hay = `${s.nom} ${s.prenom} ${s.filiere}`.toLowerCase();
      const matchSearch = q ? hay.includes(q) : true;

      return matchFiliere && matchSearch;
    });
  }
);
