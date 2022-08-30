import React from "react";
import style from "./ProductOnShopPage.module.css";
import n from '../../../../../Assets/img/new.png'
import hotest from '../../../../../Assets/img/hot.png'
import topShop from '../../../../../Assets/img/top.png'
import best from '../../../../../Assets/img/best.png'

const ProductOnShopPage = ({ productOnShopPageFilter, activeNumber, allFilter }) => {

  return (
    <div
      className={
        activeNumber === 4
          ? style.wrapper4
          : activeNumber === 3
            ? style.wrapper3
            : activeNumber === 5
              ? style.wrapper5
              : ""
      }
    >
      {/* ГДЕТО ТАМ ВНИЗУ НУЖНО НАПИСАТЬ ФИЛЬТР ПО ЦВЕТАМ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      {productOnShopPageFilter.map((product, i) => (
        allFilter.categoriesFIlter.map((item, index) => (
          item.category === product.categories && item.checked
            ? (<div className="" key={index}>
              <img className={style.imageProduct} src={product.imgUrl} alt="" />
              <div className={style.textBox}>
                {product.newShop && (
                  <span className={style.all}>
                    <img src={n} alt="" /> NEW
                  </span>
                )}
                {product.hot && (
                  <span className={style.all}>
                    <img src={hotest} alt="" /> HOT
                  </span>
                )}
                {product.top && (
                  <span className={style.all}>
                    <img src={topShop} alt="" /> TOP
                  </span>
                )}
                {product.bestSellers && (
                  <span className={style.all}>
                    <img src={best} alt="" /> BEST SELLER
                  </span>
                )}
                <br />
                <span className={style.name}>{product.name}</span>
                <br />
                <span className={style.price}>{product.price}</span>
              </div>
            </div>)
            : item.category === "All categories" && item.checked ?
              (
                <div className="" key={index}>
                  <img className={style.imageProduct} src={product.imgUrl} alt="" />
                  <div className={style.textBox}>
                    {product.newShop && (
                      <span className={style.all}>
                        <img src={n} alt="" /> NEW
                      </span>
                    )}
                    {product.hot && (
                      <span className={style.all}>
                        <img src={hotest} alt="" /> HOT
                      </span>
                    )}
                    {product.top && (
                      <span className={style.all}>
                        <img src={topShop} alt="" /> TOP
                      </span>
                    )}
                    {product.bestSellers && (
                      <span className={style.all}>
                        <img src={best} alt="" /> BEST SELLER
                      </span>
                    )}
                    <br />
                    <span className={style.name}>{product.name}</span>
                    <br />
                    <span className={style.price}>{product.price}</span>
                  </div>
                </div>
              ) : ''
        ))
      ))}
    </div>
  );
};

export default ProductOnShopPage;
