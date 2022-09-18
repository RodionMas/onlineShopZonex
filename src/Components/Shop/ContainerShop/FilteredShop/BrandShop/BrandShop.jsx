import React from "react";
import style from "./BrandShop.module.css";
import close from "../../../../../Assets/img/close.png";
const BrandShop = ({
  onFilterProductBrand,
  offFilterProductBrand,
  counterBrand,
  brandFilter,
  setNewSelectedFilter,
  newSelectedFilter,
  setStub,
  setCounterBrand,
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
      <div className={style.brand}>
        <hr />
        <div
          onClick={() => {
            setHideContent(false);
          }}
          className={style.brandTextBox}
        >
          <h2 className={style.brandText}>
            BRAND <span className={style.quantity}>{counterBrand}</span>
          </h2>
          <hr className={style.smallLine} />
        </div>
        {!hideContent && (
          <form className={style.brandCheks}>
            {brandFilter.map((brand, index) => (
              <label key={index} htmlFor={"brandId" + index}>
                <input
                  checked={brand.checked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onFilterProductBrand(brand.brand)
                      setStub(false);
                      brand.checked = e.target.checked;
                      setCounterBrand(counterBrand + 1);
                      setNewSelectedFilter([
                        ...newSelectedFilter,
                        e.target.value,
                      ]);
                    } else if (!e.target.checked) {
                      offFilterProductBrand(brand.brand)
                      setStub(true);
                      brand.checked = e.target.checked;
                      setCounterBrand(counterBrand - 1);
                      setNewSelectedFilter([
                        ...newSelectedFilter.filter(
                          (item) => item != e.target.value
                        ),
                      ]);
                    }
                  }}
                  type="checkbox"
                  id={"brandId" + index}
                  value={brand.brand}
                />

                <span>{brand.brand}</span>
              </label>
            ))}
          </form>
        )}
        <hr />
      </div>
    </div>
  );
};

export default BrandShop;
