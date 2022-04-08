import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./components/LoginPage/LoginPage";
import AirportDetails from "./components/AirportDetails/AirportDetails";
import reportWebVitals from "./reportWebVitals";
import AirportsList from "./components/AirportsList/AirportsList";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="airports" element={<App />}>
        <Route path="list" element={<AirportsList />} />
      </Route>
      <Route path="airport" element={<App />}>
        <Route path="details/:id" element={<AirportDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
