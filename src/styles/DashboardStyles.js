import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dashboard: (theme) => ({
    height: "100%",
    width: "100%",
    padding: "2.25rem 10.125rem 2.25rem 12.5rem",
    backgroundColor: (theme) ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
  }),

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
