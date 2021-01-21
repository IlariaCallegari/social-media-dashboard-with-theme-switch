import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dashboardTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dashboardHeading: {
    fontSize: "1.75rem",
  },
  dashboardSubheading: {
    color: "hsl(228, 34%, 66%)",
    marginTop: "0.1rem",
  },
  dashboardTheme: { 
    width: "8.5rem",
    color: "hsl(228, 34%, 66%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
});

export default useStyles;
