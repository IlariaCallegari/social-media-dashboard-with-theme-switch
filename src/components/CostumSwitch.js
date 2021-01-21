import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  form: {
    marginLeft: 0,
    marginRight: 0,
  },
};

const DashSwitch = withStyles((theme) => ({
  root: {
    width: "3rem",
    height: "1.5rem",
    padding: 0,
  },
  switchBase: {
    padding: 2,
    transform: "translateX(1.5rem)",
    "&$checked": {
      transform: "translateX(0)",
      "& + $track": {
        background:
          "linear-gradient(45deg, hsl(210, 78%, 56%) 10%, hsl(146, 68%, 55%))",
        opacity: 1,
        border: "none",
      },
    },
  },
  thumb: {
    width: "1.125rem",
    height: "1.125rem",
    backgroundColor: "hsl(0, 0%, 100%)",
    boxShadow: "none",
    transition: "all 2s",
    "&$checked": {
      backgroundColor: "hsl(228, 28%, 20%)",
    },
  },
  track: {
    borderRadius: 26 / 2,
    backgroundColor: "hsl(230, 22%, 74%)",
    opacity: 1,
    transition: theme.transitions.create(['background-color']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function CostumSwitch({ classes, handleChange }) {
  return (
    <FormControlLabel
      className={classes.form}
      control={<DashSwitch onChange={handleChange} name="switch" />}
    />
  );
}

export default withStyles(styles)(CostumSwitch);
