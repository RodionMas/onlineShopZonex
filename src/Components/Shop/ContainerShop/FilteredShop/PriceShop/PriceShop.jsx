import React from "react";
import style from "./PriceShop.module.css";
import close from "../../../../../Assets/img/close.png";
const PriceShop = ({ priceFilter }) => {
  const [hideContent, setHideContent] = React.useState(true);
  const [counterPrice, setCounterPrice] = React.useState(0);
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
          className={style.priceTextBox}
        >
          <h2 className={style.categoriesText}>
            PRICE <span className={style.quantity}>{counterPrice}</span>
          </h2>
          <hr className={style.smallLine} />
        </div>
        {!hideContent && (
          <div className={style.priceCheks}>
            {priceFilter.map((category, index) => (
              <label key={index} htmlFor={"priceId" + index}>
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCounterPrice(counterPrice + 1);
                    } else if (!e.target.checked) {
                      setCounterPrice(counterPrice - 1);
                    }
                  }}
                  type="checkbox"
                  id={"priceId" + index}
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

export default PriceShop;
