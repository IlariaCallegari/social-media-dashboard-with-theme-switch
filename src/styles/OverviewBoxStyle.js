import { createUseStyles } from "react-jss";
import colors from "./utils/variables";

const useStyles = createUseStyles({
  box: ({ isDark }) => ({
    display: "flex",
    width: "22.5%",
    height: "40%",
    backgroundColor: isDark
      ? colors.darkDesaturatedBlueCardBG
      : colors.lightGrayishBlueCardBG,
    color: isDark ? colors.desaturatedBlueText : colors.darkGrayishBlueText,
    fontWeight: "700",
    flexWrap: "wrap",
    alignItems: "center",
    borderRadius: 5,
    "&:hover": {
      backgroundColor: isDark
        ? colors.cardOnHoverDark
        : colors.cardOnHoverLight,
    },
    "& > div": {
      width: "50%",
      height: "50%",
      display: "flex",
      alignItems: "center",
      paddingRight: "2rem",
      paddingLeft: "2rem",
      "&:nth-child(1), &:nth-child(3)": {
        justifyContent: "flex-start",
      },
      "&:nth-child(2), &:nth-child(4)": {
        justifyContent: "flex-end",
      },
    },
  }),
  imgLogo: {
    height: "1.50rem",
    width: "1.50rem",
  },
  total: ({ isDark }) => ({
    fontSize: "1.8rem",
    color: isDark ? colors.white : colors.veryDarkBlue,
  }),
  arrow: {
    height: "0.25rem",
    width: "0.5rem",
  },
  likesStats: ({ likes }) => ({
    color: likes.isUp ? colors.limeGreen : colors.brightRed,
  }),
  viewsStats: ({ views }) => ({
    color: views.isUp ? colors.limeGreen : colors.brightRed,
  }),
  "@media(max-width: 375px)": {
    box: ({ color }) => ({
      width: "100%",
      minHeight: "15%",
      marginBottom: "1.5rem",
      "& > div": {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      },
    }),
  },
});

export default useStyles;
