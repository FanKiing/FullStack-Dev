import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, startEdit, selectVisibleProducts } from "./productSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectVisibleProducts);
  const status = useSelector((s) => s.products.status);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? <p>No products</p> : null}

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 10 }}>
        {products.map((p) => (
          <li key={p.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 10 }}>
            <strong>{p.name}</strong> — {p.category} — ${p.price}
            <div style={{ marginTop: 6 }}>{p.description}</div>

            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
              <button onClick={() => dispatch(startEdit(p))}>Edit</button>
              <button onClick={() => dispatch(deleteProduct(p.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
