import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import airports from "./common/consts/airports";

function App(props) {
  const userExist = localStorage.getItem("user");
  props.setInitialAirportsList(airports);
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

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialAirportsList: (value) =>
      dispatch({ type: "SET_INITIAL_AIRPORTS_LIST", value: null }),
  };
};

export default connect(null, mapDispatchToProps)(App);
