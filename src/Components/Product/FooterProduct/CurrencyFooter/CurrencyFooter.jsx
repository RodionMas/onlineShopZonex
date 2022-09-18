import React from "react";
import style from "./CurrencyFooter.module.css";
const CurrencyFooter = () => {
  return (
    <div className={style.wrapper}>
      <form>
        <label>
          <span className={style.text}>Currency</span>
          <select className={style.select}>
            <option value="RUS">RUS</option>
            <option value="USD">USD</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default CurrencyFooter;
