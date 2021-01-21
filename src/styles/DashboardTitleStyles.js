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
  },
  dashboardTheme: { color: "hsl(228, 34%, 66%)" },
});

export default useStyles;
