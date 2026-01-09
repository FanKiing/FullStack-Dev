import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FormStagiaire from "../components/FormStagiaire";

test("FormStagiaire en mode add appelle onSubmit", () => {
  const onSubmit = jest.fn();
  render(<FormStagiaire onSubmit={onSubmit} />);

  fireEvent.change(screen.getByLabelText(/Nom/i), { target: { value: "AAA" } });
  fireEvent.change(screen.getByLabelText(/Prénom/i), { target: { value: "BBB" } });
  fireEvent.change(screen.getByLabelText(/Filière/i), { target: { value: "Web" } });

  fireEvent.click(screen.getByRole("button", { name: /Ajouter Stagiaire/i }));
  expect(onSubmit).toHaveBeenCalled();
  expect(onSubmit.mock.calls[0][0].nom).toBe("AAA");
});

test("FormStagiaire en mode edit pré-remplit et affiche 'Modifier'", () => {
  const onSubmit = jest.fn();
  render(<FormStagiaire initialValues={{ nom: "X", prenom: "Y", filiere: "Z" }} onSubmit={onSubmit} />);

  expect(screen.getByDisplayValue("X")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Modifier Stagiaire/i })).toBeInTheDocument();
});
