import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { useEffect } from "react";

// Картинки
import logopng from '../../assets/img/png/logo.png';
import logowebp from '../../assets/img/webp/logo.webp';

const Header = () => {
  useEffect(() => {
      const burger = document.getElementById("burger");
      const menu = document.getElementById("menu");
      const menuClose = document.getElementById("menu_close");

      if (burger && menu && menuClose) {
          const toggleMenu = () => {
              menu.classList.toggle(styles.active); // Добавляем через CSS-модули
              burger.classList.toggle(styles.active);
          };

          const closeMenu = () => {
              menu.classList.remove(styles.active);
              burger.classList.remove(styles.active);
          };

          burger.addEventListener("click", toggleMenu);
          menuClose.addEventListener("click", closeMenu);

          return () => {
              burger.removeEventListener("click", toggleMenu);
              menuClose.removeEventListener("click", closeMenu);
          };
      }
  }, []);

  return (
      <header>
          <div className={styles.header_switch}>
              <div className={styles.switch_wrapper}>
                  <input type="radio" name="toggle" id="business" defaultChecked />
                  <label htmlFor="business" name="toggle">For Business</label>
                  
                  <input type="radio" name="toggle" id="customers" />
                  <label htmlFor="customers">For Customers</label>
              </div>
          </div>
          <div className={styles.header}>
              <div className={`container ${styles.header_wrapper}`}>
                  <a href="index.html" className={styles.header_logo}>
                      <picture className={styles.header_logo_img}>
                          <source srcSet={logowebp} type="image/webp" />
                          <img src={logopng} alt="logo" />
                      </picture>
                  </a>
                  <button id="contact_button" className={`button ${styles.header_button_bigscreen}`}>
                      Contact sales
                  </button>
                  <div className={styles.burger} id="burger">
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </div>
              <nav id="menu" className={styles.menu}>
                  <div className={styles.menu_close} id="menu_close">&times;</div>
                  <button id="contact_button" className={`button ${styles.header_button}`}>
                      Contact sales
                  </button>
                  <div className={styles.footer_links}>
                      <a href="#" className={styles.footer_links_link}>For Business</a>
                      <a href="#" className={styles.footer_links_link}>For Customers</a>
                      <a href="#" className={styles.footer_links_link}>Privacy Policy</a>
                      <a href="#" className={styles.footer_links_link}>Terms Of Use - Seller</a>
                      <a href="#" className={styles.footer_links_link}>Terms of Use - Sellers & Customers</a>
                  </div>
              </nav>
          </div>
      </header>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
