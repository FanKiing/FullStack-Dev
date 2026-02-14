import React from "react";

export default function Categories({ categories, selectedId, onSelect }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <button
        onClick={() => onSelect("ALL")}
        style={{ marginRight: 8, fontWeight: selectedId === "ALL" ? "bold" : "normal" }}
      >
        Toutes
      </button>

      {categories.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.id)}
          style={{ marginRight: 8, fontWeight: selectedId === c.id ? "bold" : "normal" }}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
