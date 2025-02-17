import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';
import girlPng from "../../assets/img/png/girl.png";
import girlWebp from "../../assets/img/webp/girl.webp";

const Hero = () => {
  return (
    <div className="container">
      <section className={styles.hero}>
          <div className={styles.hero_offer}>
              <h1 className={styles.hero_offer_title}>Everyone<br />is an Influencer</h1>
              <p className={styles.hero_offer_text}>
                  Budss is a payments as a service and WOM engine dedicated to acquisition and retention of customers to your business.
              </p>
              <button id="contact_button" className={`button ${styles.hero_offer_button}`}>
                  Contact sales
              </button>
          </div>
          <picture>
              <source srcSet={girlWebp} type="image/webp" />
              <img src={girlPng} alt="Header image" className={styles.hero_image} />
          </picture>
      </section>
    </div>
  );
};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
