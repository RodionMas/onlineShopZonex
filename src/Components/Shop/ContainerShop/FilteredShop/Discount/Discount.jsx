import React from "react";
import style from "./Discount.module.css";
import close from "../../../../../Assets/img/close.png";

const Discount = ({
  onFilterProductDiscount,
  offFilterProductDiscount,
  counterDiscount,
  discountFilter,
  setNewSelectedFilter,
  newSelectedFilter,
  setStub,
  setCounterDiscount,
}) => {
  
  const [hideContent, setHideContent] = React.useState(false);
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
      <div className={style.discount}>
        <hr />
        <div
          onClick={() => {
            setHideContent(false);
          }}
          className={style.discountTextBox}
        >
          <h2 className={style.discountText}>
            DISCOUNT <span className={style.quantity}>{counterDiscount}</span>
          </h2>
          <hr className={style.smallLine} />
        </div>
        {!hideContent && (
          <form className={style.discountCheks}>
            {discountFilter.map((discount, index) => (
              <label key={index} htmlFor={"discountId" + index}>
                <input
                  checked={discount.checked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onFilterProductDiscount(discount.discount)
                      setStub(false);
                      discount.checked = e.target.checked;
                      setCounterDiscount(counterDiscount + 1);
                      setNewSelectedFilter([
                        ...newSelectedFilter,
                        e.target.value,
                      ]);
                    } else if (!e.target.checked) {
                      offFilterProductDiscount(discount.discount);
                      setStub(true);
                      discount.checked = e.target.checked;
                      setCounterDiscount(counterDiscount - 1);
                      setNewSelectedFilter([
                        ...newSelectedFilter.filter(
                          (item) => item != e.target.value
                        ),
                      ]);
                    }
                  }}
                  type="checkbox"
                  id={"discountId" + index}
                  value={discount.discount}
                />

                <span>{discount.discount}</span>
              </label>
            ))}
          </form>
        )}
        <hr />
      </div>
    </div>
  );
};

export default Discount;
