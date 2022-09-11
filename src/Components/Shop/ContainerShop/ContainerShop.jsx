import React from "react";
import style from "./ContainerShop.module.css";
import FilteredShop from "./FilteredShop/FilteredShop";
import ProductShop from "./ProductShop/ProductShop";

const ContainerShop = ({
  allFilter,
  setAllFilter,
  columnNumber,
  activeNumberFn,
  activeNumber,
  setNewSelectedFilter,
  newSelectedFilter,
  setProductOnShopPageFilter,
  productOnShopPageFilter,
  setStub,
  stub,
  counterCategory,
  setCounterCategory,
  counterColor,
  setCounterColor,
  product,
  uniqeArr,
  onFilterProductColor,
  offFilterProductColor,
  onFilterProductCategory,
}) => {
  return (
    <div className={style.wrapper}>
      <FilteredShop
        onFilterProductCategory={onFilterProductCategory}
        setStub={setStub}
        allFilter={allFilter}
        setAllFilter={setAllFilter}
        setNewSelectedFilter={setNewSelectedFilter}
        newSelectedFilter={newSelectedFilter}
        stub={stub}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
        productOnShopPageFilter={productOnShopPageFilter}
        setProductOnShopPageFilter={setProductOnShopPageFilter}
        counterColor={counterColor}
        setCounterColor={setCounterColor}
        product={product}
        uniqeArr={uniqeArr}
        onFilterProductColor={onFilterProductColor}
        offFilterProductColor={offFilterProductColor}
      />
      <ProductShop
        allFilter={allFilter}
        setAllFilter={setAllFilter}
        setNewSelectedFilter={setNewSelectedFilter}
        newSelectedFilter={newSelectedFilter}
        activeNumber={activeNumber}
        activeNumberFn={activeNumberFn}
        columnNumber={columnNumber}
        setProductOnShopPageFilter={setProductOnShopPageFilter}
        productOnShopPageFilter={productOnShopPageFilter}
        setStub={setStub}
        stub={stub}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
        counterColor={counterColor}
        setCounterColor={setCounterColor}
        uniqeArr={uniqeArr}
      />
    </div>
  );
};

export default ContainerShop;
