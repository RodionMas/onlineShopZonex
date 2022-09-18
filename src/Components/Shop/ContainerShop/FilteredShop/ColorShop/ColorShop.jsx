import React from "react";
import style from "./ColorShop.module.css";
import close from "../../../../../Assets/img/close.png";

const ColorShop = ({
  colorFilter,
  setNewSelectedFilter,
  newSelectedFilter,
  setStub,
  counterColor,
  setCounterColor,
  onFilterProductColor,
  offFilterProductColor,
}) => {
  const [hideContent, setHideContent] = React.useState(true);

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
      <div className={style.colors}>
        <hr />
        <div
          onClick={() => {
            setHideContent(false);
          }}
          className={style.colorsTextBox}
        >
          <h2 className={style.colorsText}>
            COLORS <span className={style.quantity}>{counterColor}</span>
          </h2>
          <hr className={style.smallLine} />
        </div>
        {!hideContent && (
          <form className={style.colorCheks}>
            {colorFilter.map((color, index) => (
              <label key={index} htmlFor={"colorId" + index}>
                <input
                  checked={color.checked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onFilterProductColor(color.color)
                      setStub(false);
                      color.checked = e.target.checked;
                      setCounterColor(counterColor + 1);
                      setNewSelectedFilter([
                        ...newSelectedFilter,
                        e.target.value,
                      ]);

                    } else if (!e.target.checked) {
                      offFilterProductColor(color.color)
                      setStub(true);
                      color.checked = e.target.checked;
                      setCounterColor(counterColor - 1);
                      setNewSelectedFilter([
                        ...newSelectedFilter.filter(
                          (item) => item != e.target.value
                        ),
                      ]);
                    }
                  }}
                  type="checkbox"
                  id={"colorId" + index}
                  value={color.color}
                />

                <span>{color.color}</span>
              </label>
            ))}
          </form>
        )}
        <hr />
      </div>
    </div>
  );
};

export default ColorShop;
