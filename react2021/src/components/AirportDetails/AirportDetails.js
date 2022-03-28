import React, { useState } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";


function AirportDetails(props) {
  let { id } = useParams();
  let navigate = useNavigate();

  console.log('id', id)
  const airportDetails = JSON.parse(localStorage.getItem('airports')).find((airport) => airport.id === id);
  console.log('airportDetails', airportDetails)

  const handleRemoveAirportFromList = () => {
    const listWithoutCurrentAirport = JSON.parse(localStorage.getItem('airports')).filter((airport) => airport.id !== id);
    window.localStorage.setItem('airports', JSON.stringify(listWithoutCurrentAirport));
    navigate(-1);
  }

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

    console.log('dialogIsOpen', dialogIsOpen)
  return (
    <>
        <Dialog
    open={dialogIsOpen}
  >
    <DialogTitle>
      Czy na pewno chcesz usunąć lotnisko
    </DialogTitle>
    <DialogActions>
      <Button onClick={() => setDialogIsOpen(false)}>Nie</Button>
      <Button onClick={() => handleRemoveAirportFromList()} autoFocus>
        Tak
      </Button>
    </DialogActions>
  </Dialog>
    <ArrowBackIcon onClick={() => navigate(-1)} fontSize="large" />
    <DeleteForeverIcon onClick={() => setDialogIsOpen(true)} fontSize="large" />
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Airport Details</p>
        {airportDetails &&
        <>
        <span>Państwo: {airportDetails.country}</span>
        <span>Miasto: {airportDetails.city}</span>
        <span>Nazwa: {airportDetails.name}</span>
        <span>KOD: {airportDetails.iata_code}</span>
        </>
}
      </header>
    </div>
    </>
  );
}

export default AirportDetails;
