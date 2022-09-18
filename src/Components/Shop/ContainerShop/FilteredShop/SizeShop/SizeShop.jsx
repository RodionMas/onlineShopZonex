import React from "react";
import style from "./SizeShop.module.css";
import close from "../../../../../Assets/img/close.png";
const SizeShop = ({
  onFilterProductSize,
  offFilterProductSize,
  counterSize,
  sizeFilter,
  setNewSelectedFilter,
  newSelectedFilter,
  setStub,
  setCounterSize,}) => {
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
        <div className={style.size}>
          <hr />
          <div
            onClick={() => {
              setHideContent(false);
            }}
            className={style.sizeTextBox}
          >
            <h2 className={style.sizeText}>
              SIZES <span className={style.quantity}>{counterSize}</span>
            </h2>
            <hr className={style.smallLine} />
          </div>
          {!hideContent && (
            <form className={style.sizeCheks}>
              {sizeFilter.map((size, index) => (
                <label key={index} htmlFor={"sizeId" + index}>
                  <input
                    checked={size.checked}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onFilterProductSize(size.size)
                        setStub(false);
                        size.checked = e.target.checked;
                        setCounterSize(counterSize + 1);
                        setNewSelectedFilter([
                          ...newSelectedFilter,
                          e.target.value,
                        ]);
  
                      } else if (!e.target.checked) {
                        offFilterProductSize(size.size)
                        setStub(true);
                        size.checked = e.target.checked;
                        setCounterSize(counterSize - 1);
                        setNewSelectedFilter([
                          ...newSelectedFilter.filter(
                            (item) => item != e.target.value
                          ),
                        ]);
                      }
                    }}
                    type="checkbox"
                    id={"sizeId" + index}
                    value={size.size}
                  />
  
                  <span>{size.size}</span>
                </label>
              ))}
            </form>
          )}
          <hr />
        </div>
      </div>
    );
};

export default SizeShop;
