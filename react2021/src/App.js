import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import Header from './components/Header/Header';
// import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import { Navigate } from "react-router-dom";

function App() {
  const userExist = localStorage.getItem('user');

  if (!userExist) {
    return (
      <Navigate to="/" />
    )
  }
  return (
    <div className={styles.appWrapper}>
      <Header />
      {/* <ProductsFilters /> */}
      <div className={styles.columnsWrapper}>
        <ProductsList />
        <ShopingList />
      </div>
    </ div>
  );
}

export default App;
