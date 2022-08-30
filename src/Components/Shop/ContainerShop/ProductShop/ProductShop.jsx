import React from "react";
import ColumnNumbers from "./ColumnNumbers/ColumnNumbers";
import ProductOnShopPage from "./ProductOnShopPage/ProductOnShopPage";
import SelectedFilters from "./SelectedFilters/SelectedFilters";

const ProductShop = ({
  columnNumber,
  activeNumberFn,
  activeNumber,
  newSelectedFilter,
  setNewSelectedFilter,
  productOnShopPageFilter,
  setProductOnShopPageFilter,
  categoriesFIlter,
  setCategoriesFIlter,
  setStub,
  stub,
  counterCategory,
  setCounterCategory,
}) => {
  return (
    <div>
      <ColumnNumbers
        activeNumberFn={activeNumberFn}
        columnNumber={columnNumber}
        activeNumber={activeNumber}
      />
      <SelectedFilters
        stub={stub}
        setNewSelectedFilter={setNewSelectedFilter}
        newSelectedFilter={newSelectedFilter}
        categoriesFIlter={categoriesFIlter}
        setCategoriesFIlter={setCategoriesFIlter}
        setStub={setStub}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
      />
      <ProductOnShopPage
        categoriesFIlter={categoriesFIlter}
        activeNumber={activeNumber}
        productOnShopPageFilter={productOnShopPageFilter}
      />
    </div>
  );
};

export default ProductShop;
