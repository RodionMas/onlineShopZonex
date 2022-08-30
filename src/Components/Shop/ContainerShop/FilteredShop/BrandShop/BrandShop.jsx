import React from "react";
import style from "./BrandShop.module.css";
import close from "../../../../../Assets/img/close.png";
const BrandShop = ({ brandFilter }) => {
  const [hideContent, setHideContent] = React.useState(true);
  const [counterBrand, setCounterBrand] = React.useState(0);
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
          className={style.brandTextBox}
        >
          <h2 className={style.categoriesText}>
            BRAND <span className={style.quantity}>{counterBrand}</span>
          </h2>
          <hr className={style.smallLine} />
        </div>
        {!hideContent && (
          <div className={style.brandCheks}>
            {brandFilter.map((category, index) => (
              <label key={index} htmlFor={"brandId" + index}>
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCounterBrand(counterBrand + 1);
                    } else if (!e.target.checked) {
                      setCounterBrand(counterBrand - 1);
                    }
                  }}
                  type="checkbox"
                  id={"brandId" + index}
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

export default BrandShop;
