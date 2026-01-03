import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import gsap from "gsap";
import { fetchProducts, searchByName } from "./ProductSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const { products, search } = useSelector((state) => state.products);

  const listRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!listRef.current) return;


    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "all",
      }
    );
  }, [filteredProducts.length]); 

  const styles = {
    container: {
      maxWidth: "900px",
      margin: "40px auto",
      fontFamily: "Arial, sans-serif",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "8px",
      border: "1px solid #ccc",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "16px",
    },
    card: {
      background: "#111827",
      color: "white",
      padding: "16px",
      borderRadius: "12px",
    },
  };

  return (
    <div style={styles.container}>
      <input
        placeholder="Search product..."
        style={styles.input}
        value={search}
        onChange={(e) => dispatch(searchByName(e.target.value))}
      />

      <div ref={listRef} style={styles.grid}>
        {filteredProducts.map((p) => (
          <div key={p.id} style={styles.card}>
            <h3>{p.name}</h3>
            <p>{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
