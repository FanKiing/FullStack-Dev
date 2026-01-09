import reducer, {
  addStagiaire,
  deleteStagiaire,
  updateStagiaire,
  setFilterFiliere,
  setSearchTerm,
} from "../features/stagiaires/stagiairesSlice";

describe("stagiairesSlice", () => {
  test("addStagiaire ajoute un stagiaire", () => {
    const state = reducer(undefined, addStagiaire({ nom: "A", prenom: "B", ville: "Fes", filiere: "Web", photo: "x" }));
    expect(state.items.length).toBeGreaterThan(4);
    expect(state.items[state.items.length - 1].nom).toBe("A");
  });

  test("deleteStagiaire supprime par id", () => {
    const initial = reducer(undefined, { type: "@@INIT" });
    const id = initial.items[0].id;
    const state = reducer(initial, deleteStagiaire(id));
    expect(state.items.find((s) => s.id === id)).toBeUndefined();
  });

  test("updateStagiaire modifie un stagiaire", () => {
    const initial = reducer(undefined, { type: "@@INIT" });
    const id = initial.items[0].id;
    const state = reducer(initial, updateStagiaire({ id, changes: { ville: "Rabat" } }));
    expect(state.items.find((s) => s.id === id).ville).toBe("Rabat");
  });

  test("setFilterFiliere et setSearchTerm", () => {
    let state = reducer(undefined, setFilterFiliere("Dev Mobile"));
    state = reducer(state, setSearchTerm("chak"));
    expect(state.filterFiliere).toBe("Dev Mobile");
    expect(state.searchTerm).toBe("chak");
  });
});
