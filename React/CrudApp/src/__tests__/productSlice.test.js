import reducer, { setSearch, setCategory, setPriceRange } from "../productSlice";

test("setSearch", () => {
  const state = reducer(undefined, setSearch("lap"));
  expect(state.search).toBe("lap");
});

test("setCategory", () => {
  const state = reducer(undefined, setCategory("Home"));
  expect(state.category).toBe("Home");
});

test("setPriceRange", () => {
  const state = reducer(undefined, setPriceRange({ min: 10, max: 100 }));
  expect(state.priceMin).toBe(10);
  expect(state.priceMax).toBe(100);
});
