import {useDispatch} from "react-redux";
import {addTodo} from "../features/TodoSlice";
import {useState} from "react";

export default function TodoInput(){
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        placeholder="Nouvelle tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
          }
        }}
      >
        Ajouter
      </button>
    </div>
  );
}
