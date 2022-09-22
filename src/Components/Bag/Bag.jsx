import React from "react";
import style from "./Bag.module.css";
import { Link, useParams } from "react-router-dom";
const Bag = ({
  bagVisible,
  productBag,
  selectAColor,
  selectASize,
  counterProductPage,
  valueProduct,
  setValueProduct,
  wishlist,
}) => {
  return (
    <div className={bagVisible ? style.wrapper : style.wrapperHidden}>
      <div className={style.cart}>
        <h2>Your Purchases</h2>
        {[...new Set(productBag)].map((item, i) => {
          return (
            <div key={item.id} className={style.bagBox}>
              <div className={style.imgBox}>
                <Link onClick={() => {
                 setValueProduct(valueProduct.productInfo = [...item]);
                }} to={`/home/shop/${item.id}`}>
                  <img src={item.imgUrl} alt="" />
                </Link>
              </div>
              <div className={style.nameBox}>
                <span className={style.name}>Name: </span>
                <span>{item.name}</span>{" "}
                <div className={style.sizeBox}>
                  <span className={style.size}>Size:</span>{" "}
                  <span>{selectASize}</span>{" "}
                </div>
                <div className={style.colorBox}>
                  <span className={style.color}>Color: </span>
                  <span>{selectAColor}</span>
                </div>
                <div className={style.quantityBox}>
                  <span className={style.quantity}>Quantity: </span>
                  <span>{item.count}</span>
                </div>
                <div className={style.priceBox}>
                  <span className={style.price}>Price: </span>
                  <span>${item.price * counterProductPage}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      <div className={style.wishlist}>
        <h2>Your Wishlist</h2>
        {[...new Set(wishlist)].map((item, i) => {
          return (
            <div key={item.id} className={style.bagBox}>
              <div className={style.imgBox}>
                <Link onClick={() => {
                  console.log(...item)
                  console.log(item)
                 setValueProduct(valueProduct.productInfo = [...item]);
                }} to={`/home/shop/${item.id}`}>
                  <img src={item.imgUrl} alt="" />
                </Link>
              </div>
              <div className={style.nameBox}>
                <span className={style.name}>Name: </span>
                <span>{item.name}</span>{" "}
                <div className={style.priceBox}>
                  <span className={style.price}>Price: </span>
                  <span>${item.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bag;
