import React from "react";
import style from "./PriceShop.module.css";
import close from "../../../../../Assets/img/close.png";
const PriceShop = ({
  onFilterProductPrice,
  offFilterProductPrice,
  counterPrice,
  priceFilter,
  setNewSelectedFilter,
  newSelectedFilter,
  setStub,
  setCounterPrice,
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
      <div className={style.price}>
        <hr />
        <div
          onClick={() => {
            setHideContent(false);
          }}
          className={style.priceTextBox}
        >
          <h2 className={style.priceText}>
            PRICE <span className={style.quantity}>{counterPrice}</span>
          </h2>
          <hr className={style.smallLine} />
        </div>
        {!hideContent && (
          <form className={style.priceCheks}>
            {priceFilter.map((price, index) => (
              <label key={index} htmlFor={"priceId" + index}>
                <input
                  checked={price.checked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onFilterProductPrice(price.price[0], price.price[2]);
                      
                      setStub(false);
                      price.checked = e.target.checked;
                      setCounterPrice(counterPrice + 1);
                      setNewSelectedFilter([
                        ...newSelectedFilter,
                        e.target.value,
                      ]);
                    } else if (!e.target.checked) {
                      offFilterProductPrice(price.price[0], price.price[2]);
                      setStub(true);
                      price.checked = e.target.checked;
                      setCounterPrice(counterPrice - 1);
                      setNewSelectedFilter([
                        ...newSelectedFilter.filter(
                          (item) => item != e.target.value
                        ),
                      ]);
                    }
                  }}
                  type="checkbox"
                  id={"priceId" + index}
                  value={price.price}
                />

                <span>{price.price}</span>
              </label>
            ))}
          </form>
        )}
        <hr />
      </div>
    </div>
  );
};

export default PriceShop;
