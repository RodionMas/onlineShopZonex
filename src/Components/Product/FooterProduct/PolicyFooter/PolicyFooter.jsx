import React from 'react';
import { Link } from 'react-router-dom';
import style from './PolicyFooter.module.css'
const PolicyFooter = () => {
    return (
        <div className={style.wrapper}>
            <ul className={style.list}>
                <li className={style.item}><Link to='' className={style.text}>Returns Policy</Link ></li>
                <li className={style.item}><Link to='' className={style.text}>Privacy Policy</Link ></li>
            </ul>
        </div>
    );
};

export default PolicyFooter;