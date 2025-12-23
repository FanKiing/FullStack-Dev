import { render, screen, fireEvent } from "@testing-library/react";
import TodoInput from "./TodoInput";

test("ajoute une todo", () => {
  render(<TodoInput />);

//saisit le text dans l'input
  fireEvent.change(screen.getByPlaceholderText("Nouvelle tâche"), {
    target: { value: "New Tâche" },
  });

//cliquez sur le bouton ajouter
  fireEvent.click(screen.getByText("Ajouter"));

 //vérifier si l'input est vide aprés l'ajout
  expect(screen.getByPlaceholderText("Nouvelle tâche").value).toBe("");
});
