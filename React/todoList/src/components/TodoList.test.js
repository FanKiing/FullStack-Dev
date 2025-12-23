import {render,screen} from "@testing-library/react";
import TodoList from "./TodoList";

//On crée des todos factices pour le test
const todos = [
  { id: 1, text: "Tâche 1", status: "todo" },
  { id: 2, text: "Tâche 2", status: "done" },
];

test("affiche la liste des todos", () => {
  render(<TodoList todos={todos} />);

//Vérifie que les deux tâches apparaissent
  expect(screen.getByText("Tâche 1")).toBeInTheDocument();
  expect(screen.getByText("Tâche 2")).toBeInTheDocument();
});
