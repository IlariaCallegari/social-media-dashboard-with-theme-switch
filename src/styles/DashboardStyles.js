import { createUseStyles } from "react-jss";
import colors from "../styles/utils/variables";

const useStyles = createUseStyles({
  dashboard: (isDark) => ({
    height: "100%",
    width: "100%",
    padding: "2.25rem 10.125rem 2.25rem 12.5rem",
    backgroundImage: isDark
      ? `linear-gradient(${colors.veryDarkBlueTop} 28%, ${colors.veryDarkBlue} 28%)`
      : `linear-gradient(${colors.veryPaleBlueTopBG} 28%, ${colors.white} 28%)`,
  }),
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3.5%",
    marginBottom: "4%",
    "@media(max-width: 375px)": {
      flexDirection: "column",
      marginTop: "10%",
    },
  },
  overview: (isDark) => ({
    fontWeight: "700",
    fontSize: "1.5rem",
    marginBottom: "1.5%",
    color: isDark ? colors.white : colors.darkGrayishBlueText,
  }),
  container2: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "40%",
    "@media(max-width: 375px)": {
      flexDirection: "column",
      minHeight: "100vh",
      flexWrap: "nowrap",
      overflow: "hidden",
    },
  },
  "@media(max-width: 375px)": {
    dashboard: (isDark) => ({
      padding: "5%",
      backgroundImage: isDark
      ? `linear-gradient(${colors.veryDarkBlueTop} 24%, ${colors.veryDarkBlue} 24%)`
      : `linear-gradient(${colors.veryPaleBlueTopBG} 24%, ${colors.white} 24%)`,
    }),
    overview: (isDark) => ({
      marginBottom: "2%",
    }),
  },
});

export default useStyles;
