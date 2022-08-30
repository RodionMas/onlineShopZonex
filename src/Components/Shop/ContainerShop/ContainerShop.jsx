import React from "react";
import style from "./ContainerShop.module.css";
import FilteredShop from "./FilteredShop/FilteredShop";
import ProductShop from "./ProductShop/ProductShop";

const ContainerShop = ({
  allFilter,
  setAllFilter,
  colorFilter,
  sizeFilter,
  priceFilter,
  brandFilter,
  discountFilter,
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
}) => {
  return (
    <div className={style.wrapper}>
      <FilteredShop
        setStub={setStub}
        priceFilter={priceFilter}
        sizeFilter={sizeFilter}
        colorFilter={colorFilter}
        allFilter={allFilter}
        setAllFilter={setAllFilter}
        brandFilter={brandFilter}
        discountFilter={discountFilter}
        setNewSelectedFilter={setNewSelectedFilter}
        newSelectedFilter={newSelectedFilter}
        stub={stub}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
        productOnShopPageFilter={productOnShopPageFilter}
        setProductOnShopPageFilter={setProductOnShopPageFilter}
        counterColor={counterColor}
        setCounterColor={setCounterColor}
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
      />
    </div>
  );
};

export default ContainerShop;
