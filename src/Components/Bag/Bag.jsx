import React from "react";
import style from "./Bag.module.css";
import { Link, useParams } from "react-router-dom";
import close from "../../Assets/img/close.png";
const Bag = ({
  bagVisible,
  productBag,
  selectAColor,
  selectASize,
  valueProduct,
  setValueProduct,
  wishlist,
  setProductBag,
  setWishlist,
}) => {
  let [totalPrice, setTotalPrice] = React.useState(0);
  const fnTotal = (count, price = 0) => {
    totalPrice += count * price;
  };
  const closeFnProduct = (productId) => {
    let filterProduct = productBag.filter((product) => {
      return product.id !== productId
    });
    setProductBag(filterProduct)
  };
  const closeFnWishlist = (productId) => {
    let filterProduct = wishlist.filter((product) => {
      return product.id !== productId
    });
    setWishlist(filterProduct)
  };
  return (
    <div className={bagVisible ? style.wrapper : style.wrapperHidden}>
      <div className={style.cart}>
        <h2>Your Purchases</h2>
        {[...new Set(productBag)].map((item) => {
          fnTotal(item.price, item.count);
          return (
            <div key={item.id} className={style.bagBox}>
              <div className={style.imgBox}>
                <Link
                  onClick={() => {
                    setValueProduct((valueProduct.productInfo = [...item]));
                  }}
                  to={`/home/shop/${item.id}`}
                >
                  <img
                    className={style.productImg}
                    src={item.imgUrl}
                    alt="product"
                  />
                </Link>
              </div>
              <div className={style.nameBox}>
                <span className={style.name}>Name: </span>
                <span>{item.name}</span>{" "}
                <button className={style.closeBtn}>
                  <img
                    className={style.close}
                    src={close}
                    alt="close"
                    onClick={() => {
                      closeFnProduct(item.id);
                    }}
                  />
                </button>
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
                  <span>${item.price * item.count}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {productBag.length !== 0 && (
        <div className={style.totalPrice}>
          <span>Total Price: ${totalPrice}</span>
        </div>
      )}
      <hr />
      <div className={style.wishlist}>
        <h2>Your Wishlist</h2>
        {[...new Set(wishlist)].map((item) => {
          return (
            <div key={item.id} className={style.bagBox}>
              <div className={style.imgBox}>
                <Link
                  onClick={() => {
                    setValueProduct((valueProduct.productInfo = [...item]));
                  }}
                  to={`/home/shop/${item.id}`}
                >
                  <img className={style.productImg} src={item.imgUrl} alt="" />
                </Link>
              </div>
              <div className={style.nameBox}>
                <span className={style.name}>Name: </span>
                <span>{item.name}</span>{" "}
                <button className={style.closeBtn}>
                  <img
                    className={style.close}
                    src={close}
                    alt="close"
                    onClick={() => {
                      closeFnWishlist(item.id, wishlist);
                    }}
                  />
                </button>
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
