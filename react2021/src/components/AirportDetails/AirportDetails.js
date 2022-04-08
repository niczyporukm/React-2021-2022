import React, { useState } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

function AirportDetails() {
  let navigate = useNavigate();

  const handleRemoveAirportFromList = () => {
    navigate(-1);
  };

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  console.log("dialogIsOpen", dialogIsOpen);
  return (
    <>
      <Dialog open={dialogIsOpen}>
        <DialogTitle>Czy na pewno chcesz usunąć lotnisko</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDialogIsOpen(false)}>Nie</Button>
          <Button onClick={() => handleRemoveAirportFromList()} autoFocus>
            Tak
          </Button>
        </DialogActions>
      </Dialog>
      <ArrowBackIcon onClick={() => navigate(-1)} fontSize="large" />
      <DeleteForeverIcon
        onClick={() => setDialogIsOpen(true)}
        fontSize="large"
      />
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <p>Airport Details</p>
          {/* {airportDetails &&
        <>
        <span>Państwo: {airportDetails.country}</span>
        <span>Miasto: {airportDetails.city}</span>
        <span>Nazwa: {airportDetails.name}</span>
        <span>KOD: {airportDetails.iata_code}</span>
        </>
} */}
        </header>
      </div>
    </>
  );
}

export default AirportDetails;
