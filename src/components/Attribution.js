import React, {useContext} from "react";
import useStyles from "../styles/AttributionStyles";
import {ThemeContext} from "../contexts/ThemeContext";

function Attribution() {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { attribution } = classes;
  return (
    <div className={attribution}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/IlariaCallegari">Ilaria Callegari</a>.
    </div>
  );
}

export default Attribution;
