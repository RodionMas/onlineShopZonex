import React from "react";
import BrandShop from "./BrandShop/BrandShop";
import CategoriesShop from "./CategoriesShop/CategoriesShop";
import ColorShop from "./ColorShop/ColorShop";

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
  uniqeArr,
  onFilterProductColor,
  offFilterProductColor,
  onFilterProductCategory,
}) => {
  return (
    <div>
      <CategoriesShop
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
        uniqeArr={uniqeArr}
        setStub={setStub}
        stub={stub}
        newSelectedFilter={newSelectedFilter}
        setNewSelectedFilter={setNewSelectedFilter}
        setAllFilter={setAllFilter}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
        productOnShopPageFilter={productOnShopPageFilter}
        setProductOnShopPageFilter={setProductOnShopPageFilter}
        counterColor={counterColor}
        setCounterColor={setCounterColor}
      />
      {/* <SizeShop sizeFilter={allFilter.sizeFilter} />
      <PriceShop priceFilter={allFilter.priceFilter} />
      <BrandShop brandFilter={allFilter.brandFilter} />
      <Discount discountFilter={allFilter.discountFilter} /> */}
    </div>
  );
};

export default FilteredShop;
