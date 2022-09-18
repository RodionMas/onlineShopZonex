import React from 'react';
import style from "./LanguageFooter.module.css";
const LanguageFooter = () => {
    return (
        <div className={style.wrapper}>
        <form>
          <label>
            <span className={style.text}>Language</span>
            <select className={style.select}>
              <option value="ENGLISH">ENGLISH</option>
              <option value="RUSSIAN">RUSSIAN</option>
            </select>
          </label>
        </form>
      </div>
    );
};

export default LanguageFooter;