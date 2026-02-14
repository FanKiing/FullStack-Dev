import React from "react";

export default function Paginate({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: 12 }}>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          style={{
            marginRight: 6,
            fontWeight: p === currentPage ? "bold" : "normal",
          }}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
