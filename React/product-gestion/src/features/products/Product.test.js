import { describe, it, expect } from "vitest";
import reducer, { searchByName, filterByCategory, fetchProducts } from "./ProductSlice";

describe("productSlice reducers", () => {
  const initialState = { products: [], search: "", category: "", status: "idle", error: null };

  it("should handle searchByName", () => {
    const state = reducer(initialState, searchByName("Laptop"));
    expect(state.search).toBe("Laptop");
  });

  it("should handle filterByCategory", () => {
    const state = reducer(initialState, filterByCategory("Electronics"));
    expect(state.category).toBe("Electronics");
  });
});

describe("productSlice extraReducers", () => {
  it("should handle fetchProducts.fulfilled", () => {
    const payload = [{ id: 1, name: "Laptop", category: "Electronics" }];

    const action = fetchProducts.fulfilled(payload, "testRequestId", undefined);

    const state = reducer(undefined, action);
    expect(state.products).toHaveLength(1);
    expect(state.status).toBe("succeeded");
  });

  it("should handle fetchProducts.pending", () => {
    const action = fetchProducts.pending("testRequestId");
    const state = reducer(undefined, action);
    expect(state.status).toBe("loading");
  });

  it("should handle fetchProducts.rejected", () => {
    const action = fetchProducts.rejected(new Error("fail"), "testRequestId");
    const state = reducer(undefined, action);
    expect(state.status).toBe("failed");
  });
});
