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
  offFilterProductCategory,
  counterSize,
  setCounterSize,
  onFilterProductSize,
  offFilterProductSize,
  counterPrice,
  setCounterPrice,
  onFilterProductPrice,
  offFilterProductPrice,
  counterBrand,
  setCounterBrand,
  onFilterProductBrand,
  offFilterProductBrand,
  counterDiscount,
  setCounterDiscount,
  onFilterProductDiscount,
  offFilterProductDiscount,
}) => {
  return (
    <div className={style.wrapper}>
      <FilteredShop
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
        onFilterProductCategory={onFilterProductCategory}
        offFilterProductCategory={offFilterProductCategory}
        counterSize={counterSize}
        setCounterSize={setCounterSize}
        onFilterProductSize={onFilterProductSize}
        offFilterProductSize={offFilterProductSize}
        counterPrice={counterPrice}
        setCounterPrice={setCounterPrice}
        onFilterProductPrice={onFilterProductPrice}
        offFilterProductPrice={offFilterProductPrice}
        counterBrand={counterBrand}
        setCounterBrand={setCounterBrand}
        onFilterProductBrand={onFilterProductBrand}
        offFilterProductBrand={offFilterProductBrand}
        counterDiscount={counterDiscount}
        setCounterDiscount={setCounterDiscount}
        onFilterProductDiscount={onFilterProductDiscount}
        offFilterProductDiscount={offFilterProductDiscount}
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
        counterSize={counterSize}
        setCounterSize={setCounterSize}
        onFilterProductCategory={onFilterProductCategory}
        offFilterProductCategory={offFilterProductCategory}
        offFilterProductColor={offFilterProductColor}
      />
    </div>
  );
};

export default ContainerShop;
