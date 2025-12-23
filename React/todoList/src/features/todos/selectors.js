export const selectTodos = (state) => state.todos.todos;

export const selectTotalTodos = (state) => selectTodos(state).length;

export const selectTotalByStatus = (status) => (state) =>
  selectTodos(state).filter((t) => t.status === status).length;

export const selectStats = (state) => {
  const todos = selectTodos(state);
  const stats = { total: todos.length, todo: 0, "in-progress": 0, done: 0 };

  for (const t of todos) {
    if (stats[t.status] !== undefined) stats[t.status] += 1;
  }
  return stats;
};
