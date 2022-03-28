import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
  return (
    <>
    <ArrowBackIcon onClick={() => navigate(-1)} fontSize="large" />
    <DeleteForeverIcon onClick={handleRemoveAirportFromList} fontSize="large" />
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
