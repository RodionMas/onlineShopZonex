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
  setProductBag,
}) => {
  const [disabledBtn, setDisabledBtn] = React.useState(false);

  const plusFn = () => {
    if (counterProductPage < 10) {
      ++valueProduct.count;
      setCounterProductPage(valueProduct.count);
    } else if (counterProductPage > 10) {
      return false;
    }
  };
  const minusFn = () => {
    if (counterProductPage > 1) {
      --valueProduct.count;
      setCounterProductPage(valueProduct.count);
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
        <span className={style.num}>{valueProduct.count}</span>
        <button onClick={() => plusFn()} className={style.plus}>
          +
        </button>
      </div>
      <div className={style.addCart}>
        <button
          className={
            disabledBtn === true ? style.disabledBtn : style.addCartBtn
          }
          disabled={disabledBtn}
          onClick={() => {
            
            if (selectASize === "SELECT A SIZE") {
              alert("SELECT A SIZE");
            }
            if (selectAColor === "SELECT A COLOR") {
              alert("SELECT A COLOR");
            }
            if (
              selectASize !== "SELECT A SIZE" &&
              selectAColor !== "SELECT A COLOR"
            ) {
              setDisabledBtn(true);
              if (disabledBtn === false) {
                setTimeout(() => {
                  productBag.map((item, i) => {
                    return item.id === valueProduct.id && productBag.splice(i, 1)
                  })
                  setDisabledBtn(false);
                  setProductBag([...productBag, {...valueProduct}])
                  valueProduct.count = 1
                }, 1500);
              }
            }
            if (stub === false) {
              setStub(true);
            } else {
              setStub(false);
            }
          }}
        >
          ADD TO CART
        </button>
      </div>
      <div className={style.wishlist}>
        <button
          onClick={() => {
            wishlist.push(valueProduct);
          }}
        >
          ADD TO WISHLIST
        </button>
      </div>
    </div>
  );
};

export default AddCart;
