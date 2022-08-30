import React from 'react';
import style from './Banners.module.css'
import banner from '../../../../Assets/img/banner2.png'
import { Link } from 'react-router-dom';
const Banners2 = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.text}>
                <h1 className={style.title}>
                Summer Romance
                </h1>
                <Link to={'/shop'}>Shop Now</Link>
            </div>
            <div className={style.hero}>
                <img className={style.bannerHero} src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banners2;