import React from 'react';
import style from './ContainerProductPage.module.css'
import SwiperProductPage from './SwiperProductPage/SwiperProductPage'
const ContainerProductPage = () => {
    return (
        <div className={style.wrapper}>
            <SwiperProductPage />
        </div>
    );
};

export default ContainerProductPage;