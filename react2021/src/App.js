import AirportsList from './components/AirportsList/AirportsList';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import { Navigate } from "react-router-dom";
import airports from './common/consts/airports';
import { useEffect } from 'react';
import { uniqueId } from 'lodash';
import { BrowserRouter, Routes, Route, Router, Outlet } from "react-router-dom";
import AirportDetails from './components/AirportDetails/AirportDetails';

function App() {
  const userExist = localStorage.getItem('user');

  // poniższy efekt wykona się tylko raz (podczas pierwszego ładowania aplikacji / ewentualnie po ręcznym odświeżeniu)
  useEffect(() => {
    const airportsWithId = airports.map((airport) => ({...airport, id: uniqueId()}))
    window.localStorage.setItem('airports', JSON.stringify(airportsWithId));
  }, [])

  if (!userExist) {
    return (
      <Navigate to="/" />
    )
  }
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Outlet />
      {/* <AirportsList airports={airports} /> */}
    </ div>
  );
}

export default App;
