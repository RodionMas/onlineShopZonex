import React from "react";
import style from "./ColumnNumbers.module.css";
const ColumnNumbers = ({ columnNumber, activeNumberFn, activeNumber }) => {
  return (
    <div className={style.wrapper}>
      <h3 className={style.text}>COLUMN NUMBER:</h3>
      {columnNumber.map((num, i) => (
        <button
          key={i}
          onClick={() => activeNumberFn(num)}
          className={activeNumber === num ? style.activeBtnNum : style.btnNum}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default ColumnNumbers;
