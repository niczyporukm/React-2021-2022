import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

function ProductsFilters() {
  return (
    <div className={styles.filtersHeaderWrapper}>
      <Typography variant="h4">Filtruj produkty: </Typography>
      <FormGroup>
        <div className={styles.filtersForm}>
          <FormControlLabel
            control={
              <TextField
                margin="dense"
                label="Nazwa"
                variant="outlined"
                // value=''
                // onChange={}
              />
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Tylko produkty spożywcze"
          />
        </div>
      </FormGroup>
    </div>
  );
}

export default ProductsFilters;
