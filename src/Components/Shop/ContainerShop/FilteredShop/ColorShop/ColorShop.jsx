import React from "react";
import style from "./ColorShop.module.css";
import close from "../../../../../Assets/img/close.png";

const ColorShop = ({ colorFilter }) => {
  const [hideContent, setHideContent] = React.useState(true);
  const [counterColor, setCounterColor] = React.useState(0);
  return (
    <div className={style.wrapper}>
      {!hideContent && (
        <div className={style.hideBox}>
          <button
            onClick={() => {
              setHideContent(true);
            }}
            className={style.btnHide}
          >
            <img src={close} alt="close" />
            <span className={style.hideText}> HIDE FILTRES </span>
          </button>
        </div>
      )}
      <div className={style.categories}>
        <hr />
        <div
          onClick={() => {
            setHideContent(false);
          }}
          className={style.colorsTextBox}
        >
          <h2 className={style.categoriesText}>
            COLOR <span className={style.quantity}>{counterColor}</span>
          </h2>
          <hr className={style.smallLine} />
        </div>
        {!hideContent && (
          <div className={style.colorCheks}>
            {colorFilter.map((category, index) => (
              <label key={index} htmlFor={"colorId" + index}>
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCounterColor(counterColor + 1);
                    } else if (!e.target.checked) {
                      setCounterColor(counterColor - 1);
                    }
                  }}
                  type="checkbox"
                  id={"colorId" + index}
                  value={category}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>
    </div>
  );
};

export default ColorShop;
