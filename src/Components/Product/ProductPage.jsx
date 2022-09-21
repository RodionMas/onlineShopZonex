import React from "react";
import { useParams } from "react-router-dom";
import BreadCrambsProduct from "./BreadCrumbsProduct/BreadCrambsProduct";
import ContainerProductPage from "./ContainerProductPage/ContainerProductPage";
import FooterProduct from "./FooterProduct/FooterProduct";
import ProductDescription from "./ProductDescription/ProductDescription";
import style from "./ProductPage.module.css";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
const ProductPage = ({
  productOnShopPageFilter,
  selectAColor,
  setSelectAColor,
  selectASize,
  setSelectASize,
  setCounterProductPage,
  counterProductPage,
  setActiveLinkNav,
  productBag,
  setProductBag,
  setStub,
  stub,
  valueProduct,
  setValueProduct,
  wishlist,
}) => {
  const [paramsProduct, setParamsProduct] = React.useState(useParams());

  productOnShopPageFilter.filter((product, i) => {
    return Number(paramsProduct.id) === product.id
      ? (valueProduct.productInfo = product)
      : "";
  });

  React.useEffect(() => {
    setActiveLinkNav(1);
  }, [valueProduct, paramsProduct]);
  return (
    <div className={style.wrapper}>
      <BreadCrambsProduct valueProduct={valueProduct} />
      <ContainerProductPage
        stub={stub}
        valueProduct={valueProduct}
        selectAColor={selectAColor}
        setSelectAColor={setSelectAColor}
        selectASize={selectASize}
        setSelectASize={setSelectASize}
        productOnShopPageFilter={productOnShopPageFilter}
        setCounterProductPage={setCounterProductPage}
        counterProductPage={counterProductPage}
        productBag={productBag}
        setProductBag={setProductBag}
        setStub={setStub}
        wishlist={wishlist}
      />
      <ProductDescription valueProduct={valueProduct.productInfo} />
      <RelatedProduct
        setValueProduct={setValueProduct}
        valueProduct={valueProduct}
        productOnShopPageFilter={productOnShopPageFilter}
      />
      <FooterProduct />
    </div>
  );
};

export default ProductPage;
