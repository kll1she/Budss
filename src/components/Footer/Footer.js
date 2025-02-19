import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

// Logo images
import logoWebp from '../../assets/img/webp/logo.webp';
import logoPng from '../../assets/img/png/logo.png';

// App store images
import appstoreWebp from '../../assets/img/webp/appstore.webp';
import appstorePng from '../../assets/img/png/appstore.png';
import googleplayWebp from '../../assets/img/webp/googleplay.webp';
import googleplayPng from '../../assets/img/png/googleplay.png';

// Success image
import successImg from '../../assets/img/png/super.png';

const Footer = () => (
  <div className="container">
      <footer className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <a href="index.html" className={styles.footer_logo}>
            <picture className={styles.footer_logo_img}>
              <source srcSet={logoWebp} type="image/webp" className={styles.footer_logo_img} />
              <img src={logoPng} alt="logo" className={styles.footer_logo_img} />
            </picture>
          </a>

          <div className={styles.footer_links}>
            <a href="#" className={styles.footer_links_link}>For Business</a>
            <a href="#" className={styles.footer_links_link}>For Customers</a>
            <div className={styles.under}>
              <a href="#" className={`${styles.footer_links_link} ${styles.under_text}`}>Privacy Policy</a>
              <a href="#" className={`${styles.footer_links_link} ${styles.under_text}`}>Terms Of Use - Seller</a>
              <a href="#" className={`${styles.footer_links_link} ${styles.under_text}`}>Terms of Use - Sellers & Customers</a>
            </div>
          </div>

          <button id="contact_button" className={styles.footer_button}>Contact sales</button>

          <picture>
            <source srcSet={appstoreWebp} type="image/webp" className={styles.footer_img} />
            <img src={appstorePng} alt="appstore" className={styles.footer_img} />
          </picture>

          <picture>
            <source srcSet={googleplayWebp} type="image/webp" className={styles.footer_img} />
            <img src={googleplayPng} alt="googleplay" className={styles.footer_img} />
          </picture>
        </div>

        <p className={styles.footer_copy}>&copy; Copyright 2025, All Rights Reserved by Budss</p>
      </footer>

      {/* Confirmation Modal */}
      <div className={styles.modal_under}></div>
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <button className={styles.modal_close}>&times;</button>
          <form action="#" id="modal_form">
            <div className={styles.modal_input_box}>
              <label htmlFor="modal_name" className={`${styles.modal_input_name} ${styles.required_field}`}>Name</label>
              <input
                type="text"
                id="modal_name"
                name="name"
                className={styles.modal_input}
                placeholder="Enter name"
                required
              />
              <p className={styles.error_message}></p>
            </div>

            <div className={styles.modal_input_box}>
              <label htmlFor="modal_email" className={`${styles.modal_input_name} ${styles.required_field}`}>Email</label>
              <input
                type="email"
                id="modal_email"
                name="email"
                className={styles.modal_input}
                placeholder="Enter email"
                required
              />
              <p className={styles.error_message}></p>
            </div>

            <div className={styles.modal_input_box}>
              <label htmlFor="modal_phone" className={`${styles.modal_input_name} ${styles.required_field}`}>Phone number</label>
              <input
                type="text"
                id="modal_phone"
                name="phone"
                className={styles.modal_input}
                placeholder="+7 000 000 00 00"
                required
                defaultValue="+7"
                maxLength={12}
              />
              <p className={styles.error_message}></p>
            </div>

            <div className={styles.modal_input_box}>
              <label htmlFor="modal_company" className={styles.modal_input_name}>Company</label>
              <input
                type="text"
                id="modal_company"
                name="company"
                className={styles.modal_input}
                placeholder="Enter company"
              />
            </div>

            <div className={styles.modal_input_box}>
              <label htmlFor="modal_website" className={styles.modal_input_name}>Website/Store URL</label>
              <input
                type="text"
                id="modal_website"
                name="website"
                className={styles.modal_input}
                placeholder="Enter Website/Store URL"
              />
            </div>

            <p className={styles.modal_agreeing}>
              By submitting this form you are agreeing to Budss's{' '}
              <a href="#" className={styles.modal_link}>Privacy Policy</a> and{' '}
              <a href="#" className={styles.modal_link}>Terms of Use</a>
            </p>
            <p className={styles.form_error_message}></p>
            <input
              type="submit"
              value="Contact sales"
              className={`button ${styles.modal_button}`}
              disabled={true}
            />
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <div className={styles.modal_under}></div>
      <div className={styles.success_modal}>
        <p className={styles.success_close} id="success_close">&times;</p>
        <img src={successImg} alt="Super!" className={styles.success_img} />
        <p className={styles.thankYou}>Thank you!</p>
        <p className={styles.success_text}>
          Thank you, we have received your application and will contact you soon!
        </p>
        <button id="success_close" className={styles.success_button}>Super!</button>
      </div>

      {/* Cookie Banner */}
      <div className={styles.cookie_banner}>
        <button className={styles.cookie_close}>&times;</button>
        <div className={styles.cookie_wrapper}>
          <p className={styles.cookie_text}>
            This website uses cookies to ensure you get the best experience on our website. 
            They also allow us to analyze user behavior in order to constantly improve the website for you.
          </p>
          <div className={styles.cookie_buttons}>
            <button className={`${styles.cookie_button} ${styles.accept}`}>Accept</button>
            <button className={`${styles.cookie_button} ${styles.decline}`}>Decline</button>
          </div>
        </div>
      </div>
    </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
