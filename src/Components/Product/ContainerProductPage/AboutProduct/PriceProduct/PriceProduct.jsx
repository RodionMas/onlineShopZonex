import React from "react";
import style from "./PriceProduct.module.css";

const PriceProduct = ({ valueProduct }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.price}>
        <span>${valueProduct.price.toFixed(2)}</span>
      </div>
      {valueProduct.newPrice && (
        <div className={style.discount}>
          <span>${valueProduct.newPrice.toFixed(2)}</span>
          <hr className={style.line} />
        </div>
      )}
    </div>
  );
};

export default PriceProduct;
