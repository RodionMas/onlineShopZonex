import React from 'react';
import IconNav from '../Header/IconNav/IconNav';
import Logo from '../Header/Logo/Logo';
import Nav from '../Header/Nav/Nav';
import style from './WrapperNav.module.css'

const WrapperNav = ({setActiveLinkNav, activeLinkNav, bagVisibleFn, bagVisible }) => {
    return (
        <div className={style.wrapper}>
            <Nav activeLinkNav={activeLinkNav} 
            setActiveLinkNav={setActiveLinkNav}/>
            <Logo />
            <IconNav bagVisible={bagVisible} bagVisibleFn={bagVisibleFn} />
        </div>
    );
};

export default WrapperNav;