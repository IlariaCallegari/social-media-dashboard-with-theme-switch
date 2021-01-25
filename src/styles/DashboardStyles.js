import { createUseStyles } from "react-jss";
import colors from "../styles/utils/variables";

const useStyles = createUseStyles({
  dashboard: (isDark) => ({
    height: "100%",
    width: "100%",
    padding: "2.25rem 10.125rem 2.25rem 12.5rem",
    backgroundColor: isDark ? colors.veryDarkBlue : colors.white,
  }),
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3.5%",
    marginBottom: "4%",
  },
  overview: (isDark) => ({
    fontWeight: "700",
    fontSize: "1.5rem",
    marginBottom: "1.5%",
    color: isDark ? colors.white : colors.darkGrayishBlueText,
  }),
  overviewContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "40%",
  },
});

export default useStyles;
