import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Paper, Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { connect } from "react-redux";
import axios from "axios";

function AirportsList({
  airportsFromRedux,
  airportsListLoadingStatus,
  setLoadingAirportsState,
  airportsListLoadingError,
  setSelectedAirport,
}) {
  const [loadingAirportId, setLoadingAirportId] = useState(null);
  let navigate = useNavigate();
  const navigateToDetails = async (airport) => {
    try {
      setLoadingAirportId(airport.id)
      const response = await axios.get(
        `http://localhost:9000/users/${airport.id}/delayed`
        );
        setSelectedAirport(response.data);
        setLoadingAirportId(null)
        navigate(`/airport/details/${airport.id}`);
      } catch (err) {
        setLoadingAirportId(null)
      //
    }
  };
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista lotnisk</p>
        <Stack spacing={2}>
          {airportsListLoadingStatus === "loading" ? (
            <CircularProgress />
          ) : (
            airportsFromRedux?.map((airport, index) => (
              <Box key={airport.id} onClick={() => navigateToDetails(airport)}>
                {loadingAirportId && loadingAirportId === airport.id ? <CircularProgress /> :
                <Paper>{`${airport.name} - ${airport.id}`}</Paper>
            }
              </Box>
            ))
          )}
        </Stack>
      </header>
      <Snackbar
        open={airportsListLoadingStatus === "error"}
        autoHideDuration={4000}
        onClose={() => setLoadingAirportsState("initial")}
        message={airportsListLoadingError}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoadingAirportsState: (value) =>
      dispatch({ type: "SET_AIRPORTS_LOADING_STATE", value: value }),
    setSelectedAirport: (value) =>
      dispatch({ type: "SET_SELECTED_AIRPORT", value: value }),
  };
};

const mapStateToProps = (state) => {
  // state - dane pochodzące z redux sotre'a
  return {
    airportsFromRedux: state.airport.airports,
    airportsListLoadingStatus: state.airport.airportsIsLoading,
    airportsListLoadingError: state.airport.loadingAirportsError,
    // airportsFromRedux - tak będzie się nazywał props wewnątrz komponentu
    // state.airport.airports - źródło danych które mają być dostępne jako "props.airportsFromRedux"
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AirportsList);
