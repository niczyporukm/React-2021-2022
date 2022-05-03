import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import axios from "axios";

function Header(props) {
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  const setInitialValues = async () => {
    try {
      props.setLoadingAirportsState(true);
      const response = await axios.get(`http://localhost:9000/users/delayed`);
      props.setInitialAirportsList(response.data);
      props.setLoadingAirportsState(false);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <div className={styles.Wrapper}>
      <Typography sx={{ m: 2 }} variant="h5">
        Logged user:{" "}
        {`${currentUser.userfirstName} ${currentUser.userLastName}`}
      </Typography>
      <Link to="/">
        <Button variant="outlined">Sign out</Button>
      </Link>
      <Button onClick={setInitialValues}>Załaduj lotniska</Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialAirportsList: (value) =>
      dispatch({ type: "SET_INITIAL_AIRPORTS_LIST", value: value }),
    setLoadingAirportsState: (value) =>
      dispatch({ type: "SET_AIRPORTS_LOADING_STATE", value: value }),
  };
};

export default connect(null, mapDispatchToProps)(Header);
