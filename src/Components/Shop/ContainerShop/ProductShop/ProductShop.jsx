import React from "react";
import ColumnNumbers from "./ColumnNumbers/ColumnNumbers";
import ProductOnShopPage from "./ProductOnShopPage/ProductOnShopPage";
import SelectedFilters from "./SelectedFilters/SelectedFilters";
import SortProduct from "./SortProduct/SortProduct";
import style from "./ProductShop.module.css";

const ProductShop = ({
  columnNumber,
  activeNumberFn,
  activeNumber,
  newSelectedFilter,
  setNewSelectedFilter,
  productOnShopPageFilter,
  setAllFilter,
  setStub,
  stub,
  counterCategory,
  setCounterCategory,
  allFilter,
  counterColor,
  setCounterColor,
  setProductOnShopPageFilter,
  uniqeArr,
  counterSize,
  setCounterSize,
  offFilterProductColor,
  offFilterProductCategory,
}) => {
  return (
    <div>
      <div className={style.box}>
        <ColumnNumbers
          activeNumberFn={activeNumberFn}
          columnNumber={columnNumber}
          activeNumber={activeNumber}
        />
        <SortProduct
          setStub={setStub}
          stub={stub}
          productOnShopPageFilter={productOnShopPageFilter}
          uniqeArr={uniqeArr}
        />
      </div>
      <SelectedFilters
        setStub={setStub}
        stub={stub}
        setNewSelectedFilter={setNewSelectedFilter}
        newSelectedFilter={newSelectedFilter}
        allFilter={allFilter}
        setAllFilter={setAllFilter}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
        counterColor={counterColor}
        setCounterColor={setCounterColor}
        counterSize={counterSize}
        setCounterSize={setCounterSize}
        offFilterProductCategory={offFilterProductCategory}
        offFilterProductColor={offFilterProductColor}
      />

      <ProductOnShopPage
        uniqeArr={uniqeArr}
        setProductOnShopPageFilter={setProductOnShopPageFilter}
        allFilter={allFilter}
        activeNumber={activeNumber}
        productOnShopPageFilter={productOnShopPageFilter}
        setAllFilter={setAllFilter}
      />
    </div>
  );
};

export default ProductShop;
