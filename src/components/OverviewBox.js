import React from "react";
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
        <p className={total}>{likes.totLikes}</p>
        <div>
          <img
            src={likes.likeIsUp ? `${up}` : `${down}`}
            alt={likes.likeIsUp ? "up arrow" : "down arrow"}
          />
          <span>{likes.likesStat}</span>
        </div>
      </div>
      <div className={box}>
        <p>{views.type}</p>
        <img src={`${logo}`} alt={`${socialMedia} logo`} />
        <p className={total}>{views.totViews}</p>
        <div>
          <img
            src={likes.viewIsUp ? `${up}` : `${down}`}
            alt={likes.viewIsUp ? "up arrow" : "down arrow"}
          />
          <span>{views.viewsStat}</span>
        </div>
      </div>
    </React.Fragment>
  );
}
export default OverviewBox;
