import React from 'react';
import style from './SocialFooter.module.css'
import twitter from '../../../../Assets/img/kz-twitter.png'
import facebook from '../../../../Assets/img/kz-facebook.png'
import inst from '../../../../Assets/img/kz-instagram.png'
import p from '../../../../Assets/img/kz-pinterest.png'
const SocialFooter = () => {
    return (
        <div className={style.wrapper}>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={inst} alt="" />
            <img src={p} alt="" />
        </div>
    );
};

export default SocialFooter;