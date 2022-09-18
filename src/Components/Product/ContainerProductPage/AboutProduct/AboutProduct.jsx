import React from "react";
import style from "./AboutProduct.module.css";
import StarRating from "./StarRating/StarRating";
import NameProduct from "./NameProduct/NameProduct";
import PriceProduct from "./PriceProduct/PriceProduct";
import Detales from "./Detales/Detales";
import ColorProduct from "./ColorProduct/ColorProduct";
import SizeProduct from "./SizeProduct/SizeProduct";
import AddCart from "./AddCart/AddCart";
import TagsProduct from "./TagsProduct/TagsProduct";
import SocialProduct from "./SocialProduct/SocialProduct";

const AboutProduct = ({
  valueProduct,
  selectAColor,
  setSelectAColor,
  selectASize,
  setSelectASize,
  setCounterProductPage,
  counterProductPage,
  productBag,
  setProductBag,
}) => {
  return (
    <div className={style.wrapper}>
      <NameProduct valueProduct={valueProduct} />
      <StarRating valueProduct={valueProduct} />
      <PriceProduct valueProduct={valueProduct} />
      <Detales valueProduct={valueProduct} />
      <ColorProduct
        setSelectAColor={setSelectAColor}
        valueProduct={valueProduct}
        selectAColor={selectAColor}
      />
      <SizeProduct
        valueProduct={valueProduct}
        selectASize={selectASize}
        setSelectASize={setSelectASize}
      />
      <AddCart
        valueProduct={valueProduct}
        setCounterProductPage={setCounterProductPage}
        counterProductPage={counterProductPage}
        productBag={productBag}
        setProductBag={setProductBag}
      />
      <TagsProduct valueProduct={valueProduct} />
      <SocialProduct />
    </div>
  );
};

export default AboutProduct;
