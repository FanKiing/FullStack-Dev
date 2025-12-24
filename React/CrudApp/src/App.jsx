import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./productSlice";
import SearchFilter from "./SearchFilter";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <h1>React Product Manager</h1>
      <SearchFilter />
      <ProductForm />
      <ProductList />
    </div>
  );
}
