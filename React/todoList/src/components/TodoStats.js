import { useSelector } from "react-redux";

export default function TodoStats() {
  const todos = useSelector((state) => state.todos.todos);

  const total = todos.length;
  const todo = todos.filter((t) => t.status === "todo").length;
  const progress = todos.filter((t) => t.status === "in-progress").length;
  const done = todos.filter((t) => t.status === "done").length;

  return (
    <div className="alert alert-info mt-3">
      <strong>Total:</strong> {total} | 
      À faire: {todo} | 
      En cours: {progress} | 
      Terminées: {done}
    </div>
  );
}
