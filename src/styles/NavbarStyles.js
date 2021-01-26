import { createUseStyles } from "react-jss";
import colors from "./utils/variables";

const useStyles = createUseStyles({
  navbar: (isDark) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: isDark ? "inherit" : colors.veryDarkBlue,
  }),
  dashboardHeading: {
    width: "50%",
    "@media(max-width: 375px)": {
      width: "100%",
      paddingBottom: "1.5rem",
      borderBottom: `1px solid ${colors.desaturatedBlueText}`,
    },
  },
  heading: {
    fontSize: "1.75rem",
  },
  subheading: {
    color: colors.desaturatedBlueText,
    marginTop: "0.1rem",
  },
  dashboardSwitch: (isDark) => ({
    width: "50%",
    color: colors.desaturatedBlueText,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "&:hover": {
      color: isDark ? colors.white : colors.desaturatedBlueText,
    },
  }),
  mode: {
    fontWeight: "700",
    marginRight: "1rem",
  },
  "@media(max-width: 375px)": {
    navbar: (isDark) => ({
      flexDirection: "column",
    }),
    dashboardSwitch: (isDark) => ({
      justifyContent: "space-between",
      width: "100%",
      marginTop: "1.5rem",
    }),
  },
});

export default useStyles;
