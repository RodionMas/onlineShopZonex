import React from "react";
import style from "./ContainerShop.module.css";
import FilteredShop from "./FilteredShop/FilteredShop";
import ProductShop from "./ProductShop/ProductShop";

const ContainerShop = ({
  categoriesFIlter,
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
  setCategoriesFIlter,
  setStub,
  stub,
  counterCategory,
  setCounterCategory,
}) => {
  return (
    <div className={style.wrapper}>
      <FilteredShop
        setStub={setStub}
        priceFilter={priceFilter}
        sizeFilter={sizeFilter}
        colorFilter={colorFilter}
        categoriesFIlter={categoriesFIlter}
        brandFilter={brandFilter}
        discountFilter={discountFilter}
        setNewSelectedFilter={setNewSelectedFilter}
        newSelectedFilter={newSelectedFilter}
        setCategoriesFIlter={setCategoriesFIlter}
        stub={stub}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
        productOnShopPageFilter={productOnShopPageFilter}
        setProductOnShopPageFilter={setProductOnShopPageFilter}
      />
      <ProductShop
        categoriesFIlter={categoriesFIlter}
        setCategoriesFIlter={setCategoriesFIlter}
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
      />
    </div>
  );
};

export default ContainerShop;
