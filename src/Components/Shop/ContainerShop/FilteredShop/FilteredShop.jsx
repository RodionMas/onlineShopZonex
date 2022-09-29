import React from "react";
import style from './FilteredShop.module.css'
import BrandShop from "./BrandShop/BrandShop";
import CategoriesShop from "./CategoriesShop/CategoriesShop";
import ColorShop from "./ColorShop/ColorShop";
import SizeShop from "./SizeShop/SizeShop";
import PriceShop from "./PriceShop/PriceShop";
import Discount from "./Discount/Discount";

const FilteredShop = ({
  setNewSelectedFilter,
  newSelectedFilter,
  stub,
  setStub,
  counterCategory,
  setCounterCategory,
  productOnShopPageFilter,
  setProductOnShopPageFilter,
  allFilter,
  setAllFilter,
  counterColor,
  setCounterColor,
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
      <CategoriesShop
        offFilterProductCategory={offFilterProductCategory}
        onFilterProductCategory={onFilterProductCategory}
        setStub={setStub}
        stub={stub}
        newSelectedFilter={newSelectedFilter}
        setNewSelectedFilter={setNewSelectedFilter}
        categoriesFIlter={allFilter.categoriesFIlter}
        setAllFilter={setAllFilter}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
        productOnShopPageFilter={productOnShopPageFilter}
        setProductOnShopPageFilter={setProductOnShopPageFilter}
      />
      <ColorShop
        offFilterProductColor={offFilterProductColor}
        onFilterProductColor={onFilterProductColor}
        colorFilter={allFilter.colorFilter}
        setStub={setStub}
        stub={stub}
        newSelectedFilter={newSelectedFilter}
        setNewSelectedFilter={setNewSelectedFilter}
        counterColor={counterColor}
        setCounterColor={setCounterColor}
      />
      <SizeShop
        newSelectedFilter={newSelectedFilter}
        setNewSelectedFilter={setNewSelectedFilter}
        counterSize={counterSize}
        onFilterProductSize={onFilterProductSize}
        offFilterProductSize={offFilterProductSize}
        setCounterSize={setCounterSize}
        setStub={setStub}
        stub={stub}
        sizeFilter={allFilter.sizeFilter}
      />
      <PriceShop
        newSelectedFilter={newSelectedFilter}
        setNewSelectedFilter={setNewSelectedFilter}
        counterPrice={counterPrice}
        setCounterPrice={setCounterPrice}
        priceFilter={allFilter.priceFilter}
        setStub={setStub}
        stub={stub}
        onFilterProductPrice={onFilterProductPrice}
        offFilterProductPrice={offFilterProductPrice}
      />
      <BrandShop
        brandFilter={allFilter.brandFilter}
        newSelectedFilter={newSelectedFilter}
        setNewSelectedFilter={setNewSelectedFilter}
        setStub={setStub}
        stub={stub}
        counterBrand={counterBrand}
        setCounterBrand={setCounterBrand}
        onFilterProductBrand={onFilterProductBrand}
        offFilterProductBrand={offFilterProductBrand}
      />
      <Discount
        discountFilter={allFilter.discountFilter}
        counterDiscount={counterDiscount}
        setCounterDiscount={setCounterDiscount}
        onFilterProductDiscount={onFilterProductDiscount}
        offFilterProductDiscount={offFilterProductDiscount}
        setStub={setStub}
        stub={stub}
        newSelectedFilter={newSelectedFilter}
        setNewSelectedFilter={setNewSelectedFilter}
      />
    </div>
  );
};

export default FilteredShop;
