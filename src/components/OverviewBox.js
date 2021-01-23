import React, {memo} from "react";
import useStyles from "../styles/OverviewBoxStyle";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

function OverviewBox({ likes, views, logo, socialMedia }) {
  const classes = useStyles();
  const { box, total} = classes;
  return (
    <React.Fragment>
      <div className={box}>
        <p>{likes.type}</p>
        <img src={`${logo}`} alt={`${socialMedia} logo`} />
        <p className={total}>{likes.tot}</p>
        <div>
          <img
            src={likes.isUp ? `${up}` : `${down}`}
            alt={likes.isUp ? "up arrow" : "down arrow"}
          />
          <span style={{color: likes.isUp ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)" }}>{likes.stat}</span>
        </div>
      </div>
      <div className={box}>
        <p>{views.type}</p>
        <img src={`${logo}`} alt={`${socialMedia} logo`} />
        <p className={total}>{views.tot}</p>
        <div>
          <img
            src={views.isUp ? `${up}` : `${down}`}
            alt={views.isUp ? "up arrow" : "down arrow"}
          />
          <span style={{color: views.isUp ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)" }}>{views.stat}</span>
        </div>
      </div>
    </React.Fragment>
  );
}
export default memo(OverviewBox);
