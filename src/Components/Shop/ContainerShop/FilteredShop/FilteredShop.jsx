import React from "react";
import BrandShop from "./BrandShop/BrandShop";
import CategoriesShop from "./CategoriesShop/CategoriesShop";
import ColorShop from "./ColorShop/ColorShop";
import SizeShop from "./SizeShop/SizeShop";

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
}) => {
  return (
    <div>
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
      <SizeShop counterSize={counterSize}
        setCounterSize={setCounterSize}
        setStub={setStub}
        stub={stub}
        sizeFilter={allFilter.sizeFilter} />
      {/* 
      <PriceShop priceFilter={allFilter.priceFilter} />
      <BrandShop brandFilter={allFilter.brandFilter} />
      <Discount discountFilter={allFilter.discountFilter} /> */}
    </div>
  );
};

export default FilteredShop;
