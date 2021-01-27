import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

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
      "& $thumb": {
        background: "hsl(228, 28%, 20%)",
      },
    },
  },
  thumb: {
    width: "1.125rem",
    height: "1.125rem",
    background: "hsl(0, 0%, 100%)",
    boxShadow: "none",
    transition: "all 0.5s",
  },
  track: {
    borderRadius: 26 / 2,
    background: "hsl(230, 22%, 74%)",
    opacity: 1,
    "&:hover": {
      background:
        "linear-gradient(45deg, hsl(210, 78%, 56%) 10%, hsl(146, 68%, 55%))",
    },
  },
  checked: {},
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

const styles = {
    form: {
      marginLeft: 0,
      marginRight: 0,
    },
  };

export {DashSwitch, styles}