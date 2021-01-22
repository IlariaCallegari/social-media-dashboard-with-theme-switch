import React, { useState } from "react";
import useStyles from "../styles/DashboardTitleStyles";
import CostumSwitch from "./CostumSwitch";

function DashboardTitle() {
  //######****THINGS TO DO****######
  //move state logic to dashboard and set dashboard title as a pure component
  const [state, setState] = useState({ switch: true });
  const handleChange = (e) => {
    setState({[e.target.name]: e.target.checked });
  };
  const classes = useStyles();
  const {
    dashboardTitle,
    dashboardHeading,
    dashboardSubheading,
    dashboardTheme,
  } = classes;
  return (
    <div className={dashboardTitle}>
      <div>
        <h1 className={dashboardHeading}>Social Media Dashboard</h1>
        <h3 className={dashboardSubheading}>Total Followers: 23,004</h3>
      </div>
      <div className={dashboardTheme}>
        <span>Dark Mode</span>
        <CostumSwitch handleChange={handleChange}  checked={state.switch}/>
      </div>
    </div>
  );
}

export default DashboardTitle;
