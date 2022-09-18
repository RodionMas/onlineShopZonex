import React from 'react';
import style from './Payment.module.css'
import payment from '../../../../Assets/img/payment.png'
const Payment = () => {
    return (
        <div className={style.wrapper}>
            <img src={payment} alt="" />
        </div>
    );
};

export default Payment;