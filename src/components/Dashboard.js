import React from "react";
import DashboardTitle from "./DashboardTitle";
import SocialMediaBox from "./SocialMediaBox";
import OverviewBox from "./OverviewBox";
import { socialMediaData, overviewData } from "../SocialMediaData";
import useStyles from "../styles/DashboardStyles";

function Dashboard() {
  const classes = useStyles();
  const { container, overview, overviewContainer } = classes;
  return (
    <React.Fragment>
      <DashboardTitle />
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
    </React.Fragment>
  );
}

export default Dashboard;
