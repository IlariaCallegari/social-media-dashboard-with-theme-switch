import { createUseStyles } from "react-jss";
import colors from "./utils/variables"

const useStyles = createUseStyles({
  dashboardTitle:(isDark)=>({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: isDark? "inherit" : colors.veryDarkBlue,
  }),
  dashboardHeading: {
    fontSize: "1.75rem",
  },
  dashboardSubheading: {
    color: colors.desaturatedBlueText,
    marginTop: "0.1rem",
  },
  dashboardTheme: { 
    width: "8.5rem",
    color: colors.desaturatedBlueText,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
});

export default useStyles;
