import React from 'react';
import style from './Nav.module.css'
import { Link } from "react-router-dom";
const Nav = ({setActiveLinkNav, activeLinkNav}) => {
// className={style.active}
    return (
        <div className={style.wrapper}>
            <nav className={style.nav}>
                <ul className={style.list}>
                    <li className={style.item}><Link onClick={() => setActiveLinkNav(0)} className={activeLinkNav === 0 ? style.active : ''} to={'/'}>Home</Link></li>
                    <li className={style.item}><Link onClick={() => setActiveLinkNav(1)} className={activeLinkNav === 1 ? style.active : ''} to={'home/shop'}>Shop</Link></li>
                    <li className={style.item}><Link onClick={() => setActiveLinkNav(2)} className={activeLinkNav === 2 ? style.active : ''} to={'/home'}>Elements</Link></li>
                    <li className={style.item}><Link onClick={() => setActiveLinkNav(3)} className={activeLinkNav === 3 ? style.active : ''} to={'/home'}>Blog</Link></li>
                    <li className={style.item}><Link onClick={() => setActiveLinkNav(4)} className={activeLinkNav === 4 ? style.active : ''} to={'/home'}>Page</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;