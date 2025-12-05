import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, selectBooks, setSearch } from "../features/books/booksSlice";
import BookCard from "../components/BookCard";

export default function BooksList() {
  const d = useDispatch();
  const books = useSelector(selectBooks);
  const loading = useSelector((s) => s.books.loading);
  const search = useSelector((s) => s.books.filters.search);

  useEffect(() => {
    d(fetchBooks(search || "javascript"));
  }, [search]);

  return (
    <div className="container">
      <input
        className="form-control mb-4"
        placeholder="Search books..."
        value={search}
        onChange={(e) => d(setSearch(e.target.value))}
      />

      {loading && <p>Loading...</p>}

      <div className="row">
        {books.map((b) => (
          <BookCard key={b.id} b={b} />
        ))}
      </div>
    </div>
  );
}
