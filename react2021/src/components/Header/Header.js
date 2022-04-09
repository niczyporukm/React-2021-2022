import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import airports from "../../common/consts/airports";

function Header(props) {
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className={styles.Wrapper}>
      <Typography sx={{ m: 2 }} variant="h5">
        Logged user:{" "}
        {`${currentUser.userfirstName} ${currentUser.userLastName}`}
      </Typography>
      <Link to="/">
        <Button variant="outlined">Sign out</Button>
      </Link>
      <Button onClick={() => props.setInitialAirportsList(airports)}>
        Załaduj lotniska
      </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialAirportsList: (value) =>
      dispatch({ type: "SET_INITIAL_AIRPORTS_LIST", value: value }),
  };
};

export default connect(null, mapDispatchToProps)(Header);
