import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  externalBox: {
    height: "15.9375rem",
    width: "22.5%",
    cursor: "pointer",
    borderRadius: 5,
    overflow: "hidden",
    zIndex: -1,
    position: "relative",
  },
  internalBox: {
    background: "hsl(228, 28%, 20%)",
    zIndex: 2,
    height: "99%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "hsl(228, 34%, 66%)",
    fontWeight: "700",
  },
  account: {
      display: "flex",
      alignItems: "center",
    "& img": {
        marginRight: "0.3rem",
      },
  },
  totFollowers: {
    fontSize: "3.5rem",
    textTransform: "uppercase",
    textAlign: "center",
    color: "hsl(0, 0%, 100%)",
  },
  followers: {
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "0.25rem",
    fontWeight: "400",
  },
  todayStats: {
    "& img": {
      marginRight: "0.1rem",
      marginLeft: "0.1rem",
    },
    "& span": {
      marginRight: "0.1rem",
      marginLeft: "0.1rem",
    },
  },
});

export default useStyles;
