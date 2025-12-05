import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BooksList from "./pages/BooksList";
import BookDetails from "./pages/BookDetails";
import CartPage from "./pages/CartPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}
