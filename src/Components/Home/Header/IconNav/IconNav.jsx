import React from 'react';
import style from './IconNav.module.css'
import search from '../../../../Assets/img/search.png'
import bag from '../../../../Assets/img/bag.png'
const IconNav = () => {
    return (
        <div className={style.wrapper}>
            <ul className={style.listIcon}>
                <li className={style.itemIcon}><img src={search} alt="" /></li>
                <li className={style.itemIcon}><img src={bag} alt="" /> <span className={style.bag}>0</span> </li>
            </ul>
        </div>
    );
};

export default IconNav;