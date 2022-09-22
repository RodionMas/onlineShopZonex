import React from 'react';

import logo from "../../../../Assets/img/zonex.png";
import style from './Logo.module.css'
const Logo = () => {
    return (
        <div className={style.wrapper}>
            <img className={style.logo} src={logo} alt="logo" />
        </div>
    );
};

export default Logo;