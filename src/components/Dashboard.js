import React from "react";
import DashboardTitle from "./DashboardTitle";
import SocialMediaBox from "./SocialMediaBox";
import socialMediaData from "../SocialMediaData";
import useStyles from "../styles/DashboardStyles";

function Dashboard() {
  const classes = useStyles();
  const { container } = classes;
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
    </React.Fragment>
  );
}

export default Dashboard;
