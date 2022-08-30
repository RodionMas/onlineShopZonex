import React from 'react';
import style from "./Discount.module.css";
import close from "../../../../../Assets/img/close.png";

const Discount = ({discountFilter}) => {
    const [hideContent, setHideContent] = React.useState(false);
  const [counterDiscount, setCounterDiscount] = React.useState(0);
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
        <div onClick={() => {
            setHideContent(false)
        }} className={style.categoriesTextBox}>
          <h2 className={style.categoriesText}>
            DISCOUNT <span className={style.quantity}>{counterDiscount}</span>
          </h2>
          <hr className={style.smallLine} />
        </div>
        {!hideContent && (
          <div className={style.categoriesCheks}>
            {discountFilter.map((category, index) => (
              <label key={index} htmlFor={"discountId" + index}>
                <input
                  onChange={(e) => {
                    if(e.target.checked){
                      setCounterDiscount(counterDiscount + 1)
                    } else if(!e.target.checked){
                      setCounterDiscount(counterDiscount - 1)
                    }
                  }}
                  type="checkbox"
                  id={"discountId" + index}
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

export default Discount;