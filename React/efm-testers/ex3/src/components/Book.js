import React from "react";
import Favorite from "./Favorite";

export default function Book({ book, onDelete, onToggleFavorite }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.category?.name}</td>
      <td>{book.stock}</td>
      <td>{book.price}</td>

      <td style={{ cursor: "pointer" }} onClick={() => onToggleFavorite(book.id)}>
        <Favorite value={book.favorite} />
      </td>

      <td>
        <button onClick={() => onDelete(book.id)}>Supprimer</button>
      </td>
    </tr>
  );
}
