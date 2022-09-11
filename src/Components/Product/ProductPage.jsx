import React from 'react';
import BreadCrambsProduct from './BreadCrumbsProduct/BreadCrambsProduct';
import ContainerProductPage from './ContainerProductPage/ContainerProductPage';
import style from './ProductPage.module.css'
const ProductPage = () => {
    return (
        <div className={style.wrapper}>
            <BreadCrambsProduct />
            <ContainerProductPage />
        </div>
    );
};

export default ProductPage;