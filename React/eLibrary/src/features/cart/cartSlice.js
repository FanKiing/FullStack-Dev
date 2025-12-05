import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (s, a) => {
      const item = s.items.find((i) => i.id === a.payload.id);
      item ? item.quantity++ : s.items.push({ ...a.payload, quantity: 1 });
    },
    removeFromCart: (s, a) =>
      void (s.items = s.items.filter((i) => i.id !== a.payload)),
    inc: (s, a) => void s.items.find((i) => i.id === a.payload).quantity++,
    dec: (s, a) => {
      const it = s.items.find((i) => i.id === a.payload);
      it.quantity > 1 ? it.quantity-- : (s.items = s.items.filter((i) => i.id !== a.payload));
    },
    clear: (s) => void (s.items = []),
  },
});

export const { addToCart, removeFromCart, inc, dec, clear } = slice.actions;
export default slice.reducer;

export const cartTotal = (s) =>
  s.cart.items.reduce((t, i) => t + i.price * i.quantity, 0);
