import React from "react";
import useStyles from "../styles/DashboardTitleStyles";
import CostumSwitch from "./CostumSwitch";

function DashboardTitle({ handleChange, isChecked }) {
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
        <CostumSwitch
          handleChange={handleChange}
          checked={isChecked}
        />
      </div>
    </div>
  );
}

export default DashboardTitle;
