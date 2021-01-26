import { createUseStyles } from "react-jss";
import colors from "./utils/variables";

const useStyles = createUseStyles({
  externalBox: ({ color }) => ({
    height: "15.9375rem",
    width: "22.5%",
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
    backgroundImage: `${color}`,
    background: `${color}`,
  }),
  internalBox: ({ isDark }) => ({
    backgroundColor: isDark
      ? colors.darkDesaturatedBlueCardBG
      : colors.lightGrayishBlueCardBG,
    zIndex: 2,
    height: "99%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: isDark ? colors.desaturatedBlueText : colors.darkGrayishBlueText,
    fontWeight: "700",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: isDark ? colors.cardOnHoverDark : colors.cardOnHoverLight,
    },
  }),
  account: {
    display: "flex",
    alignItems: "center",
    "& img": {
      marginRight: "0.3rem",
    },
  },
  totFollowers: ({ isDark }) => ({
    fontSize: "3.5rem",
    textTransform: "uppercase",
    textAlign: "center",
    color: isDark ? colors.white : colors.veryDarkBlue,
  }),
  followers: {
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "0.25rem",
    fontWeight: "400",
  },
  todayStats: ({ isUp }) => ({
    color: isUp ? colors.limeGreen : colors.brightRed,

    "& img": {
      marginRight: "0.1rem",
      marginLeft: "0.1rem",
    },
    "& span": {
      marginRight: "0.1rem",
      marginLeft: "0.1rem",
    },
  }),
  "@media(max-width: 375px)": {
    externalBox: ({color}) => ({
      width: "100%",
      marginBottom: "2rem"
    })
  }
});

export default useStyles;
