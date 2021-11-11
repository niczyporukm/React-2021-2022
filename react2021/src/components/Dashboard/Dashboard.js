import ProductsList from '../ProductsList/ProductsList';
import ShopingList from '../ShopingList/ShopingList';
import styles from '../../App.module.scss';

function Dashboard() {
  console.log('DSSS')
  return (
      <div className={styles.columnsWrapper}>
        <ProductsList />
        <ShopingList />
      </div>
  );
}

export default Dashboard;