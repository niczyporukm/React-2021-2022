import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

function Header(props) {
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.signedUserInfo}>
        <Typography sx={{ m: 2 }} variant="h5">
          Zalogowany:{" "}
          {`${currentUser.userfirstName} ${currentUser.userLastName}`}
        </Typography>
        <Button variant="contained">Załaduj lotniska</Button>
        <Link to="/">
          <Button variant="contained" color="error">
            Wyloguj
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;