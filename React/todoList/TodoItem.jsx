import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodoText,
  changeTodoStatus
} from "../features/todos/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const startEdit = () => {
    setDraft(todo.text);
    setIsEditing(true);
  };

  const saveEdit = () => {
    const next = draft.trim();
    if (next && next !== todo.text) {
      dispatch(updateTodoText({ id: todo.id, text: next }));
    }
    setIsEditing(false);
  };

  const onDelete = () => dispatch(removeTodo(todo.id));

  const onStatusChange = (e) => {
    dispatch(changeTodoStatus(todo.id));
  };

  return (
    <li aria-label={`todo-${todo.id}`}>
      {!isEditing ? (
        <>
          <span>{todo.text}</span>{" "}
          <button onClick={startEdit}>Éditer</button>
        </>
      ) : (
        <>
          <input
            aria-label="edit-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <button onClick={saveEdit}>Enregistrer</button>
        </>
      )}

      <select
        aria-label="status-select"
        value={todo.status}
        onChange={onStatusChange}
      >
        <option value="todo">todo</option>
        <option value="in-progress">in-progress</option>
        <option value="done">done</option>
      </select>

      <button onClick={onDelete}>Supprimer</button>
    </li>
  );
}
