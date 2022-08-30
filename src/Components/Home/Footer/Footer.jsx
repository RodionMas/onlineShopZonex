import React from "react";
import style from "./Footer.module.css";
import instagtam from '../../../Assets/img/kz-instagram.png'
import facebook from '../../../Assets/img/kz-facebook.png'
import pint from '../../../Assets/img/kz-pinterest.png'
import twitter from '../../../Assets/img/kz-twitter.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.service}>
          <h2>CUSTOMER SERVICE</h2>
          <ul className={style.list}>
            <li className={style.item}>
              <span>Phone: +866 597 27 42</span>
            </li>
            <li className={style.item}>
              <span>Live chat</span>
            </li>
            <li className={style.item}>
              <span>About Us</span>
            </li>
            <li className={style.item}>
              <span>Terms & Conditions</span>
            </li>
          </ul>
        </div>
        <div className={style.company}>
          <h2>COMPANY</h2>
          <ul className={style.list}>
            <li className={style.item}>
              <span>What We Do</span>
            </li>
            <li className={style.item}>
              <span>Available Services</span>
            </li>
            <li className={style.item}>
              <span>Latest Posts</span>
            </li>
            <li className={style.item}>
              <span>FAQs</span>
            </li>
          </ul>
        </div>
        <div className={style.our}>
          <h2>OUR NEWSLETTER</h2>
          <ul className={style.list}>
            <li className={style.item}>
              <span>Join our list and get 15% off your first purchase!</span>
            </li>
            <li className={style.item}>
              <div className={style.boxInp}>
                <input
                  className={style.inp}
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  className={style.btnInp}
                  type="submit"
                  value={"Subscribe"}
                />
              </div>
            </li>
            <li className={style.item}>
              <span>*Don't worry we don't spam</span>
            </li>
          </ul>
        </div>
      </div>
      <hr className={style.line} />
      <div className={style.boxFooter}>
        <div className={style.policy}>
          <h3>Returns Policy</h3>
          <h3>Privacy Policy</h3>
        </div>
        <div className={style.social}>
            <ul className={style.socialList}>
                <li className={style.socialItem}><img src={twitter} alt="" /></li>
                <li className={style.socialItem}><img src={facebook} alt="" /></li>
                <li className={style.socialItem}><img src={instagtam} alt="" /></li>
                <li className={style.socialItem}><img src={pint} alt="" /></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
