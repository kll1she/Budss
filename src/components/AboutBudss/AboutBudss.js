import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutBudss.module.css';
import underImagePng from "../../assets/img/png/underImage.png";
import underImageWebp from "../../assets/img/webp/underImage.webp";
import contactlessPng from "../../assets/img/png/contactless.png";
import contactlessWebp from "../../assets/img/webp/contactless.webp";
import powerPng from "../../assets/img/png/power.png";
import powerWebp from "../../assets/img/webp/power.webp";
import analyticPng from "../../assets/img/png/analytic.png";
import analyticWebp from "../../assets/img/webp/analytic.webp";
import protectionPng from "../../assets/img/png/protection.png";
import protectionWebp from "../../assets/img/webp/protection.webp";
import aboutBackgroundPng from "../../assets/img/png/about_background.png";
import aboutBackgroundWebp from "../../assets/img/webp/about_background.webp";

const AboutBudss = () => {
  return (
    <div className="container">
        <section className={styles.about}>
            <div className={styles.about_description}>
                <h2 className={styles.about_description_title}>About Budss</h2>
                <h3 className={styles.about_description_text}>
                    Payment as a service, powered seamlessly by our network of shoppers
                </h3>
                <picture>
                    <source srcSet={underImageWebp} type="image/webp" />
                    <img src={underImagePng} alt="Image under text" className={styles.about_description_image} />
                </picture>
            </div>
            <div className={styles.list}>
                <div className={styles.list_element}>
                    <picture className={styles.list_element_image}>
                        <source srcSet={contactlessWebp} type="image/webp" />
                        <img src={contactlessPng} alt="Contactless" />
                    </picture>
                    <h3 className={styles.list_element_title}>Contactless</h3>
                    <p className={styles.list_element_text}>
                        Budss uses near field communication (NFC) for making contactless payments.
                    </p>
                </div>
                <div className={styles.list_element}>
                    <picture className={styles.list_element_image}>
                        <source srcSet={powerWebp} type="image/webp" />
                        <img src={powerPng} alt="Increased Buying Power" />
                    </picture>
                    <h3 className={styles.list_element_title}>Increased Buying Power</h3>
                    <p className={styles.list_element_text}>Returning customers spend up to 3X more.</p>
                </div>
                <div className={styles.list_element}>
                    <picture className={styles.list_element_image}>
                        <source srcSet={analyticWebp} type="image/webp" />
                        <img src={analyticPng} alt="Analytics & Insights" />
                    </picture>
                    <h3 className={styles.list_element_title}>Analytics & Insights</h3>
                    <p className={styles.list_element_text}>
                        Gain a holistic view into your customers’ buying behavior & purchasing patterns.
                    </p>
                </div>
                <div className={styles.list_element}>
                    <picture className={styles.list_element_image}>
                        <source srcSet={protectionWebp} type="image/webp" />
                        <img src={protectionPng} alt="Fraud Protection" />
                    </picture>
                    <h3 className={styles.list_element_title}>Fraud Protection</h3>
                    <p className={styles.list_element_text}>
                        Budss handles all payments with a fraud prevention algorithm to flag high risk purchases & a
                        user set PIN code to keep payment info secure.
                    </p>
                </div>
            </div>
            <picture>
                <source srcSet={aboutBackgroundWebp} type="image/webp" />
                <img src={aboutBackgroundPng} alt="Image under text" className={styles.list_image} />
            </picture>
        </section>
    </div>
  );
};

AboutBudss.propTypes = {};

AboutBudss.defaultProps = {};

export default AboutBudss;
