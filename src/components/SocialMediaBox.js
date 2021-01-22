import React from "react";
import useStyles from "../styles/SocialMediaBoxStyles";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

function SocialMediaBox({
  logo,
  accountName,
  totalFollowers,
  followerType,
  stats,
  isUp,
  socialMedia,
  color,
}) {
  const classes = useStyles();
  const {
    externalBox,
    internalBox,
    account,
    totFollowers,
    followers,
    todayStats,
  } = classes;
  return (
    <div
      className={externalBox}
      style={{ backgroundImage: `${color}`, background: `${color}` }}
    >
      <div className={internalBox}>
        <div className={account}>
          <img src={logo} alt={`${socialMedia} logo`} />
          <span>{accountName}</span>
        </div>
        <div>
          <p className={totFollowers}>{totalFollowers}</p>
          <p className={followers}>{followerType}</p>
        </div>
        <div
          className={todayStats}
          style={{ color: isUp ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)" }}
        >
          <img
            src={isUp ? `${up}` : `${down}`}
            alt={isUp ? "up arrow" : "down arrow"}
          />
          <span>{stats}</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaBox;
