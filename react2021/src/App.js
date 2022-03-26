import AirportsList from './components/AirportsList/AirportsList';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import { Navigate } from "react-router-dom";
import airports from './common/consts/airports';
import { useEffect } from 'react';
import { uniqueId } from 'lodash';

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
      <div className={styles.columnsWrapper}>
        <AirportsList airports={airports} />
      </div>
    </ div>
  );
}

export default App;
