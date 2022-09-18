import React from "react";
import style from "./Detales.module.css";

const Detales = ({ valueProduct }) => {
  return (
    <div className={style.wrapper}>
      <span className={style.detales}>
        {valueProduct.descr}
      </span>
    </div>
  );
};

export default Detales;
