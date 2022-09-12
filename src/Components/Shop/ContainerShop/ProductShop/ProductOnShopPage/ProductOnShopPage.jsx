import React from "react";
import style from "./ProductOnShopPage.module.css";
import n from "../../../../../Assets/img/new.png";
import hotest from "../../../../../Assets/img/hot.png";
import topShop from "../../../../../Assets/img/top.png";
import best from "../../../../../Assets/img/best.png";
import { Link } from "react-router-dom";

const ProductOnShopPage = ({
  productOnShopPageFilter,
  activeNumber,
  // allFilter,
  // setProductOnShopPageFilter,
  // setAllFilter,
  // newProductOnShopPageFilter,
  uniqeArr,
}) => {
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
      {uniqeArr.length === 0
        ? productOnShopPageFilter.map((product, i) => (
          <div className="" key={i}>
            <Link to='/home/shop/product'>
              <img
                className={style.imageProduct}
                src={product.imgUrl}
                alt=""
              />
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
            </Link>
          </div>
        ))
        : uniqeArr.map((product, i) => (

          <div className="" key={i}>
            <Link to={'/home/shop/product'}>
              <img
                className={style.imageProduct}
                src={product.imgUrl}
                alt=""
              />
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
            </Link>
          </div>

        ))}
    </div>
  );
};

export default ProductOnShopPage;
