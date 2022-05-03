import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { Link } from "react-router-dom";
import { Stack, Paper } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { connect } from "react-redux";

function AirportsList({
  airportsFromRedux,
  airportsListLoadingStatus,
  setLoadingAirportsState,
  airportsListLoadingError,
}) {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista lotnisk</p>
        <Stack spacing={2}>
          {airportsListLoadingStatus === "loading" ? (
            <CircularProgress />
          ) : (
            airportsFromRedux?.map((airport) => (
              <Link key={airport.id} to={`/airport/details/${airport.id}`}>
                <Paper>{`${airport.name} - ${airport.id}`}</Paper>
              </Link>
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
