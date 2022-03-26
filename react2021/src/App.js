import AirportsList from './components/AirportsList/AirportsList';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import { Navigate } from "react-router-dom";
import airports from './common/consts/airports';
import { useEffect } from 'react';

function App() {
  const userExist = localStorage.getItem('user');

  useEffect(() => {
    window.localStorage.setItem('airports', JSON.stringify(airports));
  }, [])

  if (!userExist) {
    return (
      <Navigate to="/" />
    )
  }
  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.columnsWrapper}>
        <AirportsList airports={airports} />
      </div>
    </ div>
  );
}

export default App;
