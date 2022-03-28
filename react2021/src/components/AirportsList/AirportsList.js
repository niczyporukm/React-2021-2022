import React, { useState } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { Link } from "react-router-dom";
import { Stack, Paper } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ProductsList(props) {
  let airportsList = JSON.parse(window.localStorage.getItem('airports'));

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista lotnisk</p>
        <Stack spacing={2}>
        {airportsList?.map((airport) =>

<Link key={airport.id} to={`/airport/details/${airport.id}`}>
<Paper>{`${airport.name} - ${airport.id}`}</Paper>
</Link>

)}
</Stack>

      </header>
    </div>
  );
}

export default ProductsList;
