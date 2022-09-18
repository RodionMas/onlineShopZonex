import React from "react";
import closeRed from "../../../../../Assets/img/redClose.png";
import style from "./SizeProduct.module.css";

const SizeProduct = ({ selectASize, setSelectASize, valueProduct }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperSizes}>
        <div className={style.sizeBox}>
          <h3 className={style.sizeText}>SIZE: </h3>
          <span className={style.selectedSize}>{selectASize}</span>
        </div>
        <div className={style.sizesCharts}>
          <h3>SIZES CHARTS</h3>
        </div>
      </div>

      <div className={style.sizesBox}>
        <ul className={style.list}>
          {valueProduct.size.map((item, i) => {
            return (
              <li key={i} className={style.item}>
                <button
                  onClick={() => setSelectASize(item)}
                  className={style.btnSizes}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
        {selectASize !== "SELECT A SIZE" ? (
          <button
            onClick={() => setSelectASize("SELECT A SIZE")}
            className={style.close}
          >
            <img src={closeRed} alt="close" />
            <span className={style.clear}>CLEAR</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SizeProduct;
