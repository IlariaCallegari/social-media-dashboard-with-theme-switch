import React, {useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import useStyles from "../styles/NavbarStyles";
import CostumSwitch from "./CostumSwitch";

function Navbar({ handleChange, isChecked }) {
  const {isDark} = useContext(ThemeContext)
  const classes = useStyles(isDark);
  const {
    navbar,
    dashboardHeading,
    heading, 
    subheading,
    dashboardSwitch,
    mode
  } = classes;
  return (
    <nav className={navbar} >
      <div className={dashboardHeading}>
        <h1 className={heading}>Social Media Dashboard</h1>
        <h3 className={subheading}>Total Followers: 23,004</h3>
      </div>
      <div className={dashboardSwitch}>
        <div className={mode}>Dark Mode</div>
        <CostumSwitch
          handleChange={handleChange}
          checked={isChecked}
        />
      </div>
    </nav>
  );
}

export default Navbar;
