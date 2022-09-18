import React from "react";
import style from "./AdditionalInformation.module.css";
const AdditionalInformation = ({ additional, visibleContent }) => {
  return (
    <div className={style.wrapper}>
      <button onClick={() => visibleContent(false, true, false)} className={additional === false ? style.dim : style.information}>Additional information</button>
    </div>
  );
};

export default AdditionalInformation;
