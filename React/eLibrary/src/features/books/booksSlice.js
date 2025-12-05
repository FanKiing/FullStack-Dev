import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

const normalize = (b) => ({
  id: b.id,
  title: b.volumeInfo.title || "",
  author: b.volumeInfo.authors?.join(", ") || "Unknown",
  description: b.volumeInfo.description || "",
  category: b.volumeInfo.categories?.[0] || "General",
  price: b.saleInfo.listPrice?.amount || 0,
  rating: b.volumeInfo.averageRating || 0,
  image: b.volumeInfo.imageLinks?.thumbnail || "",
});

// Fetch list
export const fetchBooks = createAsyncThunk("books/fetch", async (q = "react") => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=30`
  );
  const json = await res.json();
  return json.items?.map(normalize) || [];
});

// Fetch single
export const fetchBookById = createAsyncThunk("books/fetchOne", async (id) => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  return normalize(await res.json());
});

const slice = createSlice({
  name: "books",
  initialState: {
    list: [],
    selected: null,
    loading: false,
    error: null,
    filters: { search: "", rating: 0 },
  },
  reducers: {
    setSearch: (s, a) => void (s.filters.search = a.payload),
    setRatingFilter: (s, a) => void (s.filters.rating = a.payload),
    updateLocalRating: (s, a) => {
      const book = s.list.find((b) => b.id === a.payload.id);
      if (book) book.rating = a.payload.rating;
      if (s.selected?.id === a.payload.id) s.selected.rating = a.payload.rating;
    },
  },
  extraReducers: (b) =>
    b
      .addCase(fetchBooks.pending, (s) => void (s.loading = true))
      .addCase(fetchBooks.fulfilled, (s, a) => {
        s.loading = false;
        s.list = a.payload;
      })
      .addCase(fetchBookById.fulfilled, (s, a) => {
        s.loading = false;
        s.selected = a.payload;
      }),
});

export const { setSearch, setRatingFilter, updateLocalRating } = slice.actions;
export default slice.reducer;

/* Selectors */
const root = (s) => s.books;

export const selectBooks = createSelector(
  [root],
  (s) =>
    s.list.filter((b) => {
      const q = s.filters.search.toLowerCase();
      return (
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q)
      );
    })
);
export const selectOne = (s) => s.books.selected;
