import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, changeStatus } from "../features/TodoSlice";
import { useState } from "react";
export default function TodoItem({ todo }){
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(todo.text);
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {editMode ? (
          <input
            className="form-control mb-2"
            value={text}
            placeholder="nouveau text"
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <strong>{todo.text}</strong>
        )}

        <select data-testId="ancien"
          className="form-select mt-2"
          value={todo.status}
          onChange={(e) =>
            dispatch(
              changeStatus({
                id: todo.id,
                status: e.target.value,
              })
            )
          }
        >
          <option value="todo">À faire</option>
          <option value="in-progress">En cours</option>
          <option value="done">Terminé</option>
        </select>
      </div>

      <div className="ms-3">
        {editMode ? (
          <button
            className="btn btn-success btn-sm me-2"
            onClick={() => {
              dispatch(editTodo({ id: todo.id, text }));
              setEditMode(false);
            }}
          >
            Sauver
          </button>
        ) : (
          <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => setEditMode(true)}
          >
            Modifier
          </button>
        )}

        <button
          className="btn btn-danger btn-sm"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
