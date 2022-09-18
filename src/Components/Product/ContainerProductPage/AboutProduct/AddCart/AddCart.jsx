import React from "react";
import style from "./AddCart.module.css";

const AddCart = ({ setCounterProductPage, counterProductPage }) => {
    const plusFn = () => {
        if(counterProductPage < 10){
            setCounterProductPage(counterProductPage + 1)
        } else if(counterProductPage > 10){
            return false
        }
    }
    const minusFn = () => {
        if(counterProductPage > 1){
            setCounterProductPage(counterProductPage - 1)
        } else if(counterProductPage <= 1){
            return false
        }
    }
  return (
    <div className={style.wrapper}>
      <div className={style.counter}>
        <button onClick={() => minusFn()} className={style.minus}>-</button>
        <span className={style.num}>{counterProductPage}</span>
        <button onClick={() => plusFn()} className={style.plus}>+</button>
      </div>
      <div className={style.addCart}>
        <button>ADD TO CART</button>
      </div>
      <div className={style.wishlist}>
        <button>ADD TO WISHLIST</button>
      </div>
    </div>
  );
};

export default AddCart;
