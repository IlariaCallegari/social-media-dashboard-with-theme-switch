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
    "&:hover": {
      backgroundColor: "hsl(228, 25%, 27%)",
    },
    "& >*": {
      width: "50%",
      height: "50%"
    },
    "& img": {
      height: "1.25rem",
      width: "1.25rem",
    }
  },
  total: {
    fontSize: "2rem",
    color: "hsl(0, 0%, 100%)",
  },
});

export default useStyles;
