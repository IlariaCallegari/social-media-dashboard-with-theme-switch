import React, {useContext} from "react";
import useStyles from "../styles/SocialMediaBoxStyles";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";
import {ThemeContext} from "../contexts/ThemeContext"

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
  const {isDark} = useContext(ThemeContext)
  const classes = useStyles({ color, isUp, isDark});
  const {
    externalBox,
    internalBox,
    account,
    totFollowers,
    followers,
    todayStats,
  } = classes;
  return (
    <div className={externalBox}>
      <div className={internalBox}>
        <div className={account}>
          <img src={logo} alt={`${socialMedia} logo`} />
          <span>{accountName}</span>
        </div>
        <div>
          <p className={totFollowers}>{totalFollowers}</p>
          <p className={followers}>{followerType}</p>
        </div>
        <div className={todayStats}>
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
