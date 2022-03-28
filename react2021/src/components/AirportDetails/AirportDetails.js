import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function AirportDetails(props) {

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Airport Details</p>
      </header>
    </div>
  );
}

export default AirportDetails;
