import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import LoginPage from './components/LoginPage/LoginPage';
// import ProductsList from './components/ProductsList/ProductsList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/shopping" element={<App />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
