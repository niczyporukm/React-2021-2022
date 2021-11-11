import React from "react";
// import CircularProgress from "@mui/material/CircularProgress";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { Link } from "react-router-dom";
import { Stack, Paper } from "@mui/material";

import { connect } from "react-redux";

function AirportsList({ airportsFromRedux }) {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista lotnisk</p>
        <Stack spacing={2}>
          {airportsFromRedux?.map((airport) => (
            <Link key={airport.id} to={`/airport/details/${airport.id}`}>
              <Paper>{`${airport.name} - ${airport.id}`}</Paper>
            </Link>
          ))}
        </Stack>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  // state - dane pochodzące z redux sotre'a
  return {
    airportsFromRedux: state.airport.airports,
    // airportsFromRedux - tak będzie się nazywał props wewnątrz komponentu
    // state.airport.airports - źródło danych które mają być dostępne jako "props.airportsFromRedux"
  };
};

export default connect(mapStateToProps)(AirportsList);
