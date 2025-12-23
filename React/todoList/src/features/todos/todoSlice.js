import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            status: "todo"
          }
        };
      }
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(t => t.id !== action.payload);
    },
    updateTodoText(state, action) {
      const { id, text } = action.payload;
      const todo = state.todos.find(t => t.id === id);
      if (todo) todo.text = text;
    },
    changeTodoStatus(state, action) {
      const todo = state.todos.find(t => t.id === action.payload);
      if (!todo) return;

      const order = ["todo", "in-progress", "done"];
      const idx = order.indexOf(todo.status);
      todo.status = order[(idx + 1) % order.length];
    }
  }
});

export const { addTodo, removeTodo, updateTodoText, changeTodoStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
