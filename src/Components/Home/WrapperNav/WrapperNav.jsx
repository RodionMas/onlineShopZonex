import React from 'react';
import IconNav from '../Header/IconNav/IconNav';
import Logo from '../Header/Logo/Logo';
import Nav from '../Header/Nav/Nav';
import style from './WrapperNav.module.css'

const WrapperNav = ({setActiveLinkNav, activeLinkNav}) => {
    return (
        <div className={style.wrapper}>
            <Nav activeLinkNav={activeLinkNav} 
            setActiveLinkNav={setActiveLinkNav}/>
            <Logo />
            <IconNav />
        </div>
    );
};

export default WrapperNav;