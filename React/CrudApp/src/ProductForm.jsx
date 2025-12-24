import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct, cancelEdit } from "./productSlice";

const empty = { name: "", category: "Other", price: "", description: "", image: "" };

export default function ProductForm() {
  const dispatch = useDispatch();
  const editing = useSelector((s) => s.products.editing);

  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editing) setForm({ ...editing, price: String(editing.price ?? "") });
    else setForm(empty);
    setError("");
  }, [editing]);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    const price = Number(form.price);
    if (!Number.isFinite(price) || price <= 0) return "Price must be > 0";
    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = validate();
    if (msg) return setError(msg);

    const payload = { ...form, price: Number(form.price) };
    if (editing) dispatch(editProduct(payload));
    else dispatch(addProduct(payload));
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 8, marginBottom: 12 }}>
      <h2>{editing ? "Edit product" : "Add product"}</h2>

      <input aria-label="name" placeholder="Name" value={form.name} onChange={onChange("name")} />
      <select aria-label="form-category" value={form.category} onChange={onChange("category")}>
        <option value="Electronics">Electronics</option>
        <option value="Home">Home</option>
        <option value="Other">Other</option>
      </select>

      <input aria-label="price" type="number" placeholder="Price" value={form.price} onChange={onChange("price")} />
      <textarea aria-label="description" placeholder="Description" value={form.description} onChange={onChange("description")} />

      {error ? <div role="alert" style={{ color: "crimson" }}>{error}</div> : null}

      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit">{editing ? "Save" : "Add"}</button>
        {editing ? <button type="button" onClick={() => dispatch(cancelEdit())}>Cancel</button> : null}
      </div>
    </form>
  );
}
