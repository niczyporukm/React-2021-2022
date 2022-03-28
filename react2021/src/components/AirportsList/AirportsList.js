import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { Link } from "react-router-dom";

function ProductsList(props) {
  let airportsList = JSON.parse(window.localStorage.getItem('airports'));

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista lotnisk</p>
        {airportsList.map((airport) =>

         <Link to={`/airport/details/${airport.id}`}>
            <span> {`${airport.name} - ${airport.id}`} </span>
         </Link>

        )}
      </header>
    </div>
  );
}

export default ProductsList;
