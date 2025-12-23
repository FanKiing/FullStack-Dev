import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        status: "todo",
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) todo.text = text;
    },
    changeStatus: (state, action) => {
      const { id, status } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) todo.status = status;
    },
  },
});
export const {
  addTodo,
  deleteTodo,
  editTodo,
  changeStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
