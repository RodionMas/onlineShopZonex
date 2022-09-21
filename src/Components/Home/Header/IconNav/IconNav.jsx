import React from 'react';
import style from './IconNav.module.css'
import search from '../../../../Assets/img/search.png'
import bag from '../../../../Assets/img/bag.png'
const IconNav = ({ bagVisibleFn, bagVisible, productBag }) => {

    return (
        <div className={style.wrapper}>
            <ul className={style.listIcon}>
                <li className={style.itemIcon}><button className={style.btnSearch}><img src={search} alt="" /></button></li>
                <li className={style.itemIcon}><button onClick={() => bagVisibleFn()} className={!bagVisible ? style.btnBag : style.close}>{!bagVisible && <div><img src={bag} alt="" /> <span className={style.bag}>{[...new Set(productBag)].length}</span></div>}</button></li>
            </ul>
        </div>
    );
};

export default IconNav;