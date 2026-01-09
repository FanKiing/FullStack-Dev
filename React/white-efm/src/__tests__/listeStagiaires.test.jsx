import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import ListStagiaires from "../pages/ListStagiaires";
import { renderWithStore } from "./testUtils";

test("ListStagiaires filtre par filière et recherche", () => {
  renderWithStore(<ListStagiaires />);


  fireEvent.change(screen.getByLabelText("search"), { target: { value: "chak" } });
  expect(screen.getAllByTestId("stagiaire-card").length).toBe(1);


  fireEvent.change(screen.getByLabelText("search"), { target: { value: "" } });
  fireEvent.change(screen.getByLabelText("filter-filiere"), { target: { value: "Dev Mobile" } });


  const cards = screen.getAllByTestId("stagiaire-card");
  expect(cards.length).toBe(1);
  expect(screen.getByText(/Dev Mobile/i)).toBeInTheDocument();
});

test("ListStagiaires edit modifie un stagiaire", () => {
  renderWithStore(<ListStagiaires />);


  fireEvent.click(screen.getAllByLabelText("edit-stagiaire")[0]);


  const inputs = screen.getAllByRole("textbox");
  
  fireEvent.change(inputs[2], { target: { value: "Rabat" } });

  fireEvent.click(screen.getByRole("button", { name: /Modifier Stagiaire/i }));

  expect(screen.getByText(/Ville/i)).toBeInTheDocument();
  expect(screen.getByText(/Rabat/i)).toBeInTheDocument();
});
