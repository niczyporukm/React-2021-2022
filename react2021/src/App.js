import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  const userExist = localStorage.getItem("user");

  if (!userExist) {
    return <Navigate to="/" />;
  }
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
