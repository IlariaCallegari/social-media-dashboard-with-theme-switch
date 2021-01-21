import React from "react";
import Switch from "@material-ui/core/Switch";
import useStyles from "../styles/DashboardTitleStyles";

function DashboardTitle() {
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
        Dark mode{" "}
        <span>
          <Switch />
        </span>
      </div>
    </div>
  );
}

export default DashboardTitle;
