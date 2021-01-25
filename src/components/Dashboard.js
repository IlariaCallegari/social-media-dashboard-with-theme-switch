import React, { useState, useContext } from "react";
import DashboardTitle from "./DashboardTitle";
import SocialMediaBox from "./SocialMediaBox";
import OverviewBox from "./OverviewBox";
import { ThemeContext } from "../contexts/ThemeContext";
import useStyles from "../styles/DashboardStyles";
import { socialMediaData, overviewData } from "../SocialMediaData";

function Dashboard() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [state, setState] = useState({ isChecked: true });

  const handleChange = (e) => {
    setState({ isChecked: e.target.checked });
    toggleTheme();
  };
  const classes = useStyles();
  const { container, overview, overviewContainer, dashboard } = classes;
  return (
    <div className={dashboard} style={{backgroundColor: theme? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)"}}>
      <DashboardTitle handleChange={handleChange} isChecked={state.isChecked} />

      <section className={container}>
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
      </section>
      <h2 className={overview}>Overview - Today</h2>
      <section className={overviewContainer}>
        {overviewData.map((social) => (
          <OverviewBox
            key={social.SocialMedia}
            likes={social.likes}
            views={social.views}
            logo={social.logo}
            socialMedia={social.socialMedia}
          />
        ))}
      </section>
    </div>
  );
}

export default Dashboard;
