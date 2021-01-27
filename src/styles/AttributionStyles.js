import { createUseStyles } from "react-jss";
import colors from "../styles/utils/variables";

const useStyles = createUseStyles({
    attribution: isDark => ({
        backgroundColor: isDark? colors.veryDarkBlue : colors.white,
    })
})

export default useStyles