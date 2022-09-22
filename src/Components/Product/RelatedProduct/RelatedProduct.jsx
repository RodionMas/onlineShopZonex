// swiper
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
//swiper
import n from "../../../Assets/img/new.png";
import hotest from "../../../Assets/img/hot.png";
import topShop from "../../../Assets/img/top.png";
import best from "../../../Assets/img/best.png";
import { Link, useParams } from "react-router-dom";
import style from "./RelatedProduct.module.css";

const RelatedProduct = ({ valueProduct, productOnShopPageFilter, setValueProduct }) => {
  const [pathRelateProduct, setPathRelateProduct] =
    React.useState("/home/shop/");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className={style.wrapper}>
      <h1 className={style.related}>Related Product</h1>
      <div className={style.swiperRelated}>
        <Swiper
          style={{
            height: "670px",
          }}
          slidesPerView={4}
          slidesPerGroup={4}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiperRelated"
        >
          {productOnShopPageFilter.map((product, i) => {
            return (
              <SwiperSlide key={product.id}>
                <Link
                  onClick={() => {
                    setValueProduct(valueProduct.productInfo = [...product]);
                  }}
                  to={`${pathRelateProduct + product.id}`}
                >
                  <img
                    className={style.imageProduct}
                    src={product.imgUrl}
                    alt=""
                  />
                  <div className={style.textBox}>
                    {product.newShop && (
                      <span className={style.all}>
                        <img src={n} alt="" /> NEW
                      </span>
                    )}
                    {product.hot && (
                      <span className={style.all}>
                        <img src={hotest} alt="" /> HOT
                      </span>
                    )}
                    {product.top && (
                      <span className={style.all}>
                        <img src={topShop} alt="" /> TOP
                      </span>
                    )}
                    {product.bestSellers && (
                      <span className={style.all}>
                        <img src={best} alt="" /> BEST SELLER
                      </span>
                    )}
                    <br />
                    <span className={style.name}>{product.name}</span>
                    <br />
                    <span className={style.price}>${product.price}</span>
                    {product.newPrice && (
                      <span className={style.newPrice}>
                        - ${product.newPrice}
                        <hr className={style.lineNewPrice} />
                      </span>
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <hr />
    </div>
  );
};

export default RelatedProduct;
