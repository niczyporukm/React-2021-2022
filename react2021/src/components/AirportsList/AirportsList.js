import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ProductsList(props) {

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista lotnisk</p>
        {props.airports.map((airport) => <span> {airport.name} </span>)}
      </header>
    </div>
  );
}

export default ProductsList;
