import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
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
      marginBottom: "1.5%"
    },
    overviewContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      height: "40%"
    }
  });

export default useStyles;
