import React from "react";
import best from "../../../../../Assets/img/best.png";
import n from "../../../../../Assets/img/new.png";
import hotest from "../../../../../Assets/img/hot.png";
import topShop from "../../../../../Assets/img/top.png";
import style from './NameProduct.module.css'

const NameProduct = ({valueProduct}) => {
  return (
    <div>
      <div className={style.nameProduct}>
      {valueProduct.newShop && (
                    <span className={style.all}>
                      <img src={n} alt="" /> NEW
                    </span>
                  )}
                  {valueProduct.hot && (
                    <span className={style.all}>
                      <img src={hotest} alt="" /> HOT
                    </span>
                  )}
                  {valueProduct.top && (
                    <span className={style.all}>
                      <img src={topShop} alt="" /> TOP
                    </span>
                  )}
                  {valueProduct.bestSellers && (
                    <span className={style.all}>
                      <img src={best} alt="" /> BEST SELLER
                    </span>
                  )}
      </div>
      <span className={style.titleName}>{valueProduct.name}</span>
    </div>
  );
};

export default NameProduct;
