import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import SocialMediaBox from "./SocialMediaBox";
import OverviewBox from "./OverviewBox";
import Attribution from "./Attribution";
import useStyles from "../styles/DashboardStyles";
import { ThemeContext } from "../contexts/ThemeContext";
import { socialMediaData, overviewData } from "../SocialMediaData";

function Dashboard() {
  //get theme and set the state
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const [state, setState] = useState({ isChecked: true });

  //grabs the classes from the stylesheet
  const classes = useStyles(isDark);
  const { container, overview, container2, dashboard } = classes;

  //handle switch change
  const handleChange = (e) => {
    setState({ isChecked: e.target.checked });
    toggleTheme();
  };
  return (
    <div className={dashboard}>
      <Navbar handleChange={handleChange} isChecked={state.isChecked} />

      <div className={container}>
        {socialMediaData.map((social) => (
          <SocialMediaBox
            logo={social.logo}
            accountName={social.accountName}
            totalFollowers={social.totalFollowers}
            followerType={social.followerType}
            stats={social.stats}
            isUp={social.isUp}
            socialMedia={social.socialMedia}
            color={social.color}
            key={social.socialMedia}
          />
        ))}
      </div>
      <h2 className={overview}>Overview - Today</h2>
      <div className={container2}>
        {overviewData.map((social) => (
          <OverviewBox
            key={social.SocialMedia}
            likes={social.likes}
            views={social.views}
            logo={social.logo}
            socialMedia={social.socialMedia}
          />
        ))}
      </div>
      <Attribution />
    </div>
  );
}

export default Dashboard;
