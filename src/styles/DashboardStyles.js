import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dashboard: {
    height: "100%",
    width: "100%",
    padding: "2.25rem 10.125rem 2.25rem 12.5rem",
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3.5%",
    marginBottom: "4%",
  },
  overview: {
    fontWeight: "700",
    fontSize: "1.5rem",
    marginBottom: "1.5%",
  },
  overviewContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "40%",
  },
});

export default useStyles;
