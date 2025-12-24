import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setCategory, setPriceRange } from "./productSlice";

export default function SearchFilter() {
  const dispatch = useDispatch();
  const { search, category, priceMin, priceMax } = useSelector((s) => s.products);

  return (
    <div style={{ display: "grid", gap: 8, marginBottom: 12 }}>
      <input
        aria-label="search"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <select
          aria-label="category"
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="ALL">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Home">Home</option>
          <option value="Other">Other</option>
        </select>

        <input
          aria-label="min-price"
          type="number"
          placeholder="Min price"
          value={priceMin}
          onChange={(e) => dispatch(setPriceRange({ min: e.target.value, max: priceMax }))}
        />
        <input
          aria-label="max-price"
          type="number"
          placeholder="Max price"
          value={priceMax}
          onChange={(e) => dispatch(setPriceRange({ min: priceMin, max: e.target.value }))}
        />
      </div>
    </div>
  );
}
