import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import stagiairesReducer from "../features/stagiaires/stagiairesSlice";
import { render } from "@testing-library/react";

export function renderWithStore(ui, { preloadedState } = {}) {
  const store = configureStore({
    reducer: { stagiaires: stagiairesReducer },
    preloadedState,
  });

  return { store, ...render(<Provider store={store}>{ui}</Provider>) };
}
