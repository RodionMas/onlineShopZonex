import React from "react";
import style from "./SortProduct.module.css";
const SortProduct = ({ productOnShopPageFilter, setStub, stub, uniqeArr }) => {
  const fPrice = (arr) => {
    arr.sort((a, b) => (a.price > b.price ? 1 : -1));
  };
  const fABC = (arr) => {
    arr.sort((a, b) => (a.name[0] > b.name[0] ? 1 : -1));
  };
  return (
    <div>
      <form>
        <label>
          <span className={style.sortText}>SORT BY:</span>
          <select
            onChange={(e) => {
              if (e.target.value === "PRICE") {
                if (uniqeArr.length === 0) {
                  fPrice(productOnShopPageFilter);
                } else {
                  fPrice(uniqeArr);
                }
              } else if (e.target.value === "ALPHABET") {
                if (uniqeArr.length === 0) {
                  fABC(productOnShopPageFilter);
                } else {
                  fABC(uniqeArr);
                }
              }
              if (stub === true) {
                setStub(false);
              } else {
                setStub(true);
              }
            }}
            className={style.sel}
          >
            <option value="ALPHABET">ALPHABET</option>
            <option value="PRICE">PRICE</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default SortProduct;
