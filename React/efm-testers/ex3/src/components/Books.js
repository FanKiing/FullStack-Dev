import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Book from "./Book";
import Paginate from "./Paginate";
import Categories from "./Categories";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 3;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("https://fake.api.com/books");
        setBooks(res.data);
      } catch (e) {
        console.error("Erreur fetch books:", e);
      }
    };
    fetchBooks();
  }, []);

  const categories = useMemo(() => {
    const map = new Map();
    books.forEach((b) => {
      if (b.category?.id && !map.has(b.category.id)) {
        map.set(b.category.id, { id: b.category.id, name: b.category.name });
      }
    });
    return Array.from(map.values());
  }, [books]);

  const filteredBooks = useMemo(() => {
    if (selectedCategoryId === "ALL") return books;
    return books.filter((b) => b.category?.id === selectedCategoryId);
  }, [books, selectedCategoryId]);

  const totalPages = Math.ceil(filteredBooks.length / pageSize) || 1;

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [totalPages, currentPage]);

  const paginatedBooks = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredBooks.slice(start, start + pageSize);
  }, [filteredBooks, currentPage]);

  const handleDelete = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const handleToggleFavorite = (id) => {
    setBooks(
      books.map((b) => (b.id === id ? { ...b, favorite: !b.favorite } : b))
    );
  };

  const handleSelectCategory = (id) => {
    setSelectedCategoryId(id);
    setCurrentPage(1);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Bibliothèque de livres</h2>

      <p>
        <strong>Total :</strong> {filteredBooks.length} livre(s)
      </p>

      <Categories
        categories={categories}
        selectedId={selectedCategoryId}
        onSelect={handleSelectCategory}
      />

      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Catégorie</th>
            <th>Stock</th>
            <th>Prix</th>
            <th>Favori</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedBooks.map((book) => (
            <Book
              key={book.id}
              book={book}
              onDelete={handleDelete}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
          {paginatedBooks.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                Aucun livre
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Paginate
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
