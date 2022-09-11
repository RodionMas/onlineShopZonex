import React from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './BreadCrambsProduct.module.css'

const BreadCrambsProduct = () => {
    const breadCrumbsLinkProduct = useParams();
    const [counterBreadProduct, setCounterBreadProduct] = React.useState(0);
  
    React.useEffect(() => {
      for (let value in breadCrumbsLinkProduct) {
        let countValue = [];
        setCounterBreadProduct([...countValue, value].length);
      }
    }, []);
    return (
        <div className={style.wrapper}>
             <Link to={`/`} className={style.link}>
          {breadCrumbsLinkProduct.home.toUpperCase()}
        </Link>
        <span className={style.separator}> / </span>
        <Link
          to={`/${breadCrumbsLinkProduct.home}/${breadCrumbsLinkProduct.shop}`}
          className={style.link}
        >
          {breadCrumbsLinkProduct.shop.toUpperCase()}
        </Link>
        <span className={style.separator}> / </span>
        <span
          to={`/${breadCrumbsLinkProduct.product}/${breadCrumbsLinkProduct.product}`}
          className={counterBreadProduct === 1 ? style.active : "" + '' + style.link}
        >
          {breadCrumbsLinkProduct.product.toUpperCase()}
        </span>
        </div>
    );
};

export default BreadCrambsProduct;