// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import { airportReducer } from "../redux/airports/reducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { airport: airportReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}> <BrowserRouter>{children}</BrowserRouter></Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }