import React from "react";
import style from "./Description.module.css";

const Description = ({ desc, visibleContent }) => {
  return (
    <div className={style.wrapper}>
      <button
        onClick={() => visibleContent(true, false, false)}
        className={desc === true ? style.description : style.dim}
      >
        Description
      </button>
    </div>
  );
};

export default Description;
