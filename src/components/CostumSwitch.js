import React from "react";
import { DashSwitch, styles } from "../styles/CostumSwitchStyles";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function CostumSwitch({ classes, handleChange, checked }) {
  return (
    <FormControlLabel
      className={classes.form}
      control={
        <DashSwitch onChange={handleChange} name="switch" checked={checked} />
      }
    />
  );
}

export default withStyles(styles)(CostumSwitch);
