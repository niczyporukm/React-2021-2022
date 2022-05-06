import React, { useState } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { connect, useSelector, useDispatch } from "react-redux";
import { getSelectedAirport } from "../../redux/airports/selectors";

function AirportDetails() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();

  const handleRemoveAirportFromList = () => {
    dispatch({ type: "REMOVE_AIRPORT_BY_ID", value: id });
    navigate(-1);
  };

  const goBackToAirportsList = () => {
    dispatch({ type: "SET_SELECTED_AIRPORT", value: {} });
    navigate(-1);
  }

  const airportDetails = useSelector((store) => getSelectedAirport(store));

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

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
      <ArrowBackIcon onClick={goBackToAirportsList} fontSize="large" />
      <DeleteForeverIcon
        onClick={() => setDialogIsOpen(true)}
        fontSize="large"
      />
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <p>Airport Details</p>
          {airportDetails && (
            <>
              <span>Państwo: {airportDetails.country}</span>
              <span>Miasto: {airportDetails.city}</span>
              <span>Nazwa: {airportDetails.name}</span>
              <span>KOD: {airportDetails.iata_code}</span>
            </>
          )}
        </header>
      </div>
    </>
  );
}

// const mapStateToProps = (store) => {
//   return {
//     getAirportById: (id) => getAirportByIdSelector(store, id),
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeAirportById: (id) =>
//       dispatch({ type: "REMOVE_AIRPORT_BY_ID", value: id }),
//   };
// };

export default AirportDetails;
// export default connect(mapStateToProps)AirportDetails;
