import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import StagiairesCard from "../components/StagiairesCard";

test("StagiairesCard affiche les infos et déclenche delete/edit", () => {
  const s = { id: "1", nom: "TEST", prenom: "USER", ville: "Fes", filiere: "Web", photo: "p.jpg" };
  const onDelete = jest.fn();
  const onEdit = jest.fn();

  render(<StagiairesCard stagiaire={s} onDelete={onDelete} onEdit={onEdit} />);

  expect(screen.getByText(/Nom et prénom/i)).toBeInTheDocument();
  expect(screen.getByText(/TEST USER/i)).toBeInTheDocument();

  fireEvent.click(screen.getByLabelText("delete-stagiaire"));
  expect(onDelete).toHaveBeenCalledWith("1");

  fireEvent.click(screen.getByLabelText("edit-stagiaire"));
  expect(onEdit).toHaveBeenCalledWith(s);
});
