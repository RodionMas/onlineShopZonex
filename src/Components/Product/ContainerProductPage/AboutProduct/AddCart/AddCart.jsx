import React from "react";
import style from "./AddCart.module.css";

const AddCart = ({
  setCounterProductPage,
  counterProductPage,
  productBag,
  valueProduct,
  setStub,
  selectAColor,
  selectASize,
  stub,
  wishlist,
}) => {
  const plusFn = () => {
    if (counterProductPage < 10) {
      ++valueProduct.count
      setCounterProductPage(valueProduct.count)
    } else if (counterProductPage > 10) {
      return false;
    }
  };
  const minusFn = () => {
    if (counterProductPage > 1) {
      --valueProduct.count
      setCounterProductPage(valueProduct.count)
    } else if (counterProductPage <= 1) {
      return false;
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.counter}>
        <button onClick={() => minusFn()} className={style.minus}>
          -
        </button>
        <span className={style.num}>{counterProductPage === 1 ? counterProductPage : valueProduct.count}</span>
        <button onClick={() => plusFn()} className={style.plus}>
          +
        </button>
      </div>
      <div className={style.addCart}>
        <button
          onClick={() => {
            if (selectASize === "SELECT A SIZE") {
              alert("SELECT A SIZE");
            }
            if (selectAColor === "SELECT A COLOR") {
              alert("SELECT A COLOR");
            } 
            if(selectASize !== "SELECT A SIZE" && selectAColor !== "SELECT A COLOR"){
              productBag.push(valueProduct);
              setStub(true);
            }
            if(stub === false){
              setStub(true);
            } else{
              setStub(false);
            }
            setCounterProductPage(1)
          }}
        >
          ADD TO CART
        </button>
      </div>
      <div className={style.wishlist}>
        <button onClick={() => {
          wishlist.push(valueProduct)
        }}>ADD TO WISHLIST</button>
      </div>
    </div>
  );
};

export default AddCart;
