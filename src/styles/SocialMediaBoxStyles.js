import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  externalBox: ({color}) => ({
    height: "15.9375rem",
    width: "22.5%",
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
    backgroundImage: `${color}`, 
    background: `${color}` 
  }),
  internalBox: {
    backgroundColor: "hsl(228, 28%, 20%)",
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
    color: "hsl(228, 34%, 66%)",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background 1.5s",
    "&:hover": {
      backgroundColor: "hsl(228, 25%, 27%)",
    }
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
  todayStats: ({isUp}) => ({
    color: isUp? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)",
    
    "& img": {
      marginRight: "0.1rem",
      marginLeft: "0.1rem",
    },
    "& span": {
      marginRight: "0.1rem",
      marginLeft: "0.1rem",
    },
  }),
});

export default useStyles;
