import React from 'react';
import style from './MarketingCatch.module.css'
import close from '../../../Assets/img/close.png'
import buy from '../../../Assets/img/buy.jpg'
const MarketingCatch = ({closeMarketing}) => {
    return (
        <div className={style.wrapper}>
            <div>
                <img className={style.imgMarketing} src={buy} alt="" />
            </div>
            <div className={style.text}>
                <span className={style.purchaed}>Someone purchaed a</span>
                <h3 className={style.title}>Faux shearling double-breasted coat </h3>
                <p className={style.ago}>15 minutes ago London, Great Britain</p>
            </div>
            <div>
                <img onClick={() => closeMarketing()} className={style.close} src={close} alt="" />
            </div>
        </div>
    );
};

export default MarketingCatch;