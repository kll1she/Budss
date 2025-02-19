import React from 'react';
import PropTypes from 'prop-types';
import styles from './Awareness.module.css';

// Импорты для социальных иконок
import facebookPng from '../../assets/img/png/facebook.png';
import facebookWebp from '../../assets/img/webp/facebook.webp';
import twitterPng from '../../assets/img/png/twitter.png';
import twitterWebp from '../../assets/img/webp/twitter.webp';
import instPng from '../../assets/img/png/inst.png';
import instWebp from '../../assets/img/webp/inst.webp';
import tiktokPng from '../../assets/img/png/tiktok.png';
import tiktokWebp from '../../assets/img/webp/tiktok.webp';

// Импорты для компаний
import wooPng from '../../assets/img/png/woo.png';
import wooWebp from '../../assets/img/webp/woo.webp';
import shopifyPng from '../../assets/img/png/shopify.png';
import shopifyWebp from '../../assets/img/webp/shopify.webp';
import squarePng from '../../assets/img/png/square.png';
import squareWebp from '../../assets/img/webp/square.webp';
import squarespacePng from '../../assets/img/png/squarespace.png';
import squarespaceWebp from '../../assets/img/webp/squarespace.webp';
import cloverPng from '../../assets/img/png/clover.png';
import cloverWebp from '../../assets/img/webp/clover.webp';

const Awareness = () => (
  <section className={styles.awareness}>
    <div className="container">
        <div className={styles.awareness_wrapper}>
            <div className={styles.awareness_textBlock}>
                <h2 className={styles.awareness_textBlock_title}>Your Brand Awareness Maters</h2>
                <p className={styles.awareness_textBlock_text}>Budss is a husle free solution to put your brand on any digital surface including Instagram, Facebook, Twitter and TikTok</p>
            </div>
            <div className={styles.awareness_social}>
                <a href="#">
                    <picture>
                        <source srcSet={facebookWebp} type="image/webp" className={styles.awareness_social_icon} />
                        <img src={facebookPng} alt="Facebook" className={styles.awareness_social_icon} />
                    </picture>
                </a>
                <a href="#">
                    <picture>
                        <source srcSet={twitterWebp} type="image/webp" className={styles.awareness_social_icon} />
                        <img src={twitterPng} alt="Twitter" className={styles.awareness_social_icon} />
                    </picture>
                </a>
                <a href="#">
                    <picture>
                        <source srcSet={instWebp} type="image/webp" className={styles.awareness_social_icon} />
                        <img src={instPng} alt="Instagram" className={styles.awareness_social_icon} />
                    </picture>
                </a>
                <a href="#">
                    <picture>
                        <source srcSet={tiktokWebp} type="image/webp" className={styles.awareness_social_icon} />
                        <img src={tiktokPng} alt="TikTok" className={styles.awareness_social_icon} />
                    </picture>
                </a>
            </div>
        </div>
        <div className={styles.awareness_companies}>
            <picture>
                <source srcSet={wooWebp} type="image/webp" className={styles.awareness_companies_icon} />
                <img src={wooPng} alt="Woo commerce" className={styles.awareness_companies_icon} />
            </picture>
            <picture>
                <source srcSet={shopifyWebp} type="image/webp" className={styles.awareness_companies_icon} />
                <img src={shopifyPng} alt="Shopify" className={styles.awareness_companies_icon} />
            </picture>
            <picture>
                <source srcSet={squareWebp} type="image/webp" className={styles.awareness_companies_icon} />
                <img src={squarePng} alt="Square" className={styles.awareness_companies_icon} />
            </picture>
            <picture>
                <source srcSet={squarespaceWebp} type="image/webp" className={styles.awareness_companies_icon} />
                <img src={squarespacePng} alt="Squarespace" className={styles.awareness_companies_icon} />
            </picture>
            <picture>
                <source srcSet={cloverWebp} type="image/webp" className={styles.awareness_companies_icon} />
                <img src={cloverPng} alt="Clover" className={styles.awareness_companies_icon} />
            </picture>
        </div>
    </div>
  </section>
);

Awareness.propTypes = {};

Awareness.defaultProps = {};

export default Awareness;
