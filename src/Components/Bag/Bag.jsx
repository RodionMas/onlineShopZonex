import React from 'react';
import style from './Bag.module.css'
const Bag = ({ bagVisible }) => {
    return (
        <div className={bagVisible ? style.wrapper : style.wrapperHidden}>
            <div className={style.cart}>
                <h2>Your Purchases</h2>
            </div>
            <hr />
            <div className={style.wishlist}>
                <h2>Your Wishlist</h2>
            </div>
        </div>
    );
};

export default Bag;