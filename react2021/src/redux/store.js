import { configureStore } from "@reduxjs/toolkit";
import { airportReducer } from "./airports/reducer";

export const store = configureStore({
  reducer: {
    airport: airportReducer,
  },
});
