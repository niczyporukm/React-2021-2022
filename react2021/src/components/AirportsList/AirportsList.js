import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ProductsList(props) {
  let airportsList = JSON.parse(window.localStorage.getItem('airports'));

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista lotnisk</p>
        {airportsList.map((airport) => <span> {`${airport.name} - ${airport.id}`} </span>)}
      </header>
    </div>
  );
}

export default ProductsList;
