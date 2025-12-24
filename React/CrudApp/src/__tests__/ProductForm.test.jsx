import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import productsReducer from "../productSlice";
import ProductForm from "../ProductForm";

test("validates required name", async () => {
  const user = userEvent.setup();
  const store = configureStore({
    reducer: { products: productsReducer },
    preloadedState: {
      products: {
        items: [],
        search: "",
        category: "ALL",
        priceMin: 0,
        priceMax: 999999,
        status: "idle",
        error: null,
        editing: null,
      },
    },
  });

  render(
    <Provider store={store}>
      <ProductForm />
    </Provider>
  );

  await user.type(screen.getByLabelText("price"), "10");
  await user.click(screen.getByRole("button", { name: /add/i }));

  expect(screen.getByRole("alert")).toHaveTextContent(/name is required/i);
});
