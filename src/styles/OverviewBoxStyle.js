import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  box: {
    display: "flex",
    flexWrap: "wrap",
    width: "22.5%",
    height: "40%",
    backgroundColor: "hsl(228, 28%, 20%)",
    color: "hsl(228, 34%, 66%)",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "hsl(228, 25%, 27%)",
    },
    "& >*": {
      width: "50%",
      height: "20%",
      padding: "2rem",
    },
  },
  total: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    color: "hsl(0, 0%, 100%)",
  },
});

export default useStyles;
