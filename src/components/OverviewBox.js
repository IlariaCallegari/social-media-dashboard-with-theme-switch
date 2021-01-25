import React, { memo, useContext} from "react";
import useStyles from "../styles/OverviewBoxStyle";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";
import {ThemeContext} from "../contexts/ThemeContext"

function OverviewBox({ likes, views, logo, socialMedia }) {
  const {isDark} = useContext(ThemeContext)
  const classes = useStyles({likes, views, isDark});
  const { box, total, imgLogo, arrow, likesStats, viewsStats} = classes;
  return (
    <React.Fragment>
      <div className={box} >
        <div>
          <p>{likes.type}</p>
        </div>
        <div>
          <img className={imgLogo} src={`${logo}`} alt={`${socialMedia} logo`} />
        </div>
        <div>
          <p className={total}>{likes.tot}</p>
        </div>
        <div>
          <img
            src={likes.isUp ? `${up}` : `${down}`}
            alt={likes.isUp ? "up arrow" : "down arrow"}
            className={arrow}
          />
          <span className={likesStats}
          >
            {likes.stat}
          </span>
        </div>
      </div>

      <div className={box}>
        <div>
          <p>{views.type}</p>
        </div>
        <div>
          <img className={imgLogo} src={`${logo}`} alt={`${socialMedia} logo`} />
        </div>
        <div>
          <p className={total}>{views.tot}</p>
        </div>
        <div>
          <img
            src={views.isUp ? `${up}` : `${down}`}
            alt={views.isUp ? "up arrow" : "down arrow"}
            className={arrow}
          />
          <span className={viewsStats}
          >
            {views.stat}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
export default memo(OverviewBox);
