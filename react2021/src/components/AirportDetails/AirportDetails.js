import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useParams } from 'react-router-dom';

function AirportDetails(props) {
  let { id } = useParams();
  console.log('id', id)
  const airportDetails = JSON.parse(localStorage.getItem('airports')).find((airport) => airport.id === id);
  console.log('airportDetails', airportDetails)
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Airport Details</p>
        <span>Państwo: {airportDetails.country}</span>
        <span>Miasto: {airportDetails.city}</span>
        <span>Nazwa: {airportDetails.name}</span>
        <span>KOD: {airportDetails.iata_code}</span>
      </header>
    </div>
  );
}

export default AirportDetails;
