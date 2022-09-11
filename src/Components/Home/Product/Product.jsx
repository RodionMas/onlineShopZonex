import React from "react";
import style from "./Product.module.css";
import best from '../../../Assets/img/best.png'
import hotest from '../../../Assets/img/hot.png'
import n from '../../../Assets/img/new.png'
import topShop from '../../../Assets/img/top.png'
import { Link } from "react-router-dom";

const Product = ({ imgUrl, newShop, name, price, sale, id, bestSellers, hot, top }) => {
  return (
    <div className={style.wrapper}>
      <Link to={'/home/shop/product'}>
      <img className={style.image} src={imgUrl} alt="" />
      <div className={style.textBox}>
        {newShop && <span className={style.all}><img src={n} alt="" /> NEW</span>}
        {hot && <span className={style.all}><img src={hotest} alt="" /> HOT</span>}
        {top && <span className={style.all}><img src={topShop} alt="" /> TOP</span>}
        {bestSellers && <span className={style.all}><img src={best} alt="" /> BEST SELLER</span>}
        <br />
        <span className={style.name}>{name}</span>
        <br />
        <span className={style.price}>{price}</span>
      </div>
      </Link>
    </div>
  );
};

export default Product;
