import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  box: {
    display: "flex",
    width: "22.5%",
    height: "40%",
    backgroundColor: "hsl(228, 28%, 20%)",
    color: "hsl(228, 34%, 66%)",
    fontWeight: "700",
    flexWrap: "wrap",
    alignItems: "center",
    borderRadius: 5,
    "&:hover": {
      backgroundColor: "hsl(228, 25%, 27%)",
    },
    "& > div": {
      width: "50%",
      height: "50%",
      display: "flex",
      alignItems: "center",
      paddingRight: "2rem",
      paddingLeft: "2rem",
      "&:nth-child(1), &:nth-child(3)": {
        justifyContent: "flex-start",
      },
      "&:nth-child(2), &:nth-child(4)": {
        justifyContent: "flex-end",
      },
    },
  },
  imgLogo: {
    height: "1.25rem",
    width: "1.25rem",
  },
  total: {
    fontSize: "2rem",
    color: "hsl(0, 0%, 100%)",
  },
  arrow: {
    height: "0.25rem",
    width: "0.5rem",
  },
});

export default useStyles;
