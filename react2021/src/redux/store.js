import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./products/reducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
