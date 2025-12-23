import reducer, {
  addTodo,
  deleteTodo,
  editTodo,
  changeStatus,
} from "./TodoSlice";

describe("todoSlice", () => {
  test("état initial", () => {
    expect(reducer(undefined, {})).toEqual({ todos: [] });
  });

  test("ajout todo", () => {

    const state = reducer({todos:[]}, addTodo("Test"));
    expect(state.todos.length).toBe(1);
  });

  test("édition todo", () => {
    const state = reducer(
      { todos: [{ id: 1, text: "A", status: "todo" }] },
      editTodo({ id: 1, text: "B" })
    );
    expect(state.todos[0].text).toBe("B");
  });

  test("changement statut", () => {
    const state = reducer(
      { todos: [{ id: 1, text: "A", status: "todo" }] },
      changeStatus({ id: 1, status: "done" })
    );
    expect(state.todos[0].status).toBe("done");
  });

  test("suppression todo", () => {
    const state = reducer(
      { todos: [{ id: 1, text: "A" }] },
      deleteTodo(1)
    );
    expect(state.todos.length).toBe(0);
  });
});
