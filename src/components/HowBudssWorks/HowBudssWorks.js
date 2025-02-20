import React from 'react';
import PropTypes from 'prop-types';
import styles from './HowBudssWorks.module.css';
import phonePng from '../../assets/img/png/phone.png';
import phoneWebp from '../../assets/img/webp/phone.webp';

const HowBudssWorks = () => (
    <section className={styles.howWorks}>
        <div className={styles.howWorks_wrapper}>
            {/* Первая строка */}
            <div className={styles.howWorks_movingText}>
                <div className={`${styles.scrolling_text} ${styles.marquee1} ${styles.reverse}`}>
                    <p className={`${styles.howWorks_movingText_text} ${styles.green}`}>How Budss Works</p>
                    <p className={`${styles.howWorks_movingText_text} ${styles.border}`}>How Budss Works</p>
                </div>
                <div className={`${styles.scrolling_text} ${styles.marquee2} ${styles.reverse}`}>
                    <p className={`${styles.howWorks_movingText_text} ${styles.green}`}>How Budss Works</p>
                    <p className={`${styles.howWorks_movingText_text} ${styles.border}`}>How Budss Works</p>
                </div>
            </div>

            {/* Вторая строка */}
            <div className={styles.howWorks_movingText}>
                <div className={`${styles.scrolling_text} ${styles.marquee1}`}>
                    <p className={`${styles.howWorks_movingText_text} ${styles.purple}`}>How Budss Works</p>
                    <p className={`${styles.howWorks_movingText_text} ${styles.border}`}>How Budss Works</p>
                </div>
                <div className={`${styles.scrolling_text} ${styles.marquee2}`}>
                    <p className={`${styles.howWorks_movingText_text} ${styles.purple}`}>How Budss Works</p>
                    <p className={`${styles.howWorks_movingText_text} ${styles.border}`}>How Budss Works</p>
                </div>
            </div>

            {/* Третья строка */}
            <div className={styles.howWorks_movingText}>
                <div className={`${styles.scrolling_text} ${styles.marquee1} ${styles.reverse}`}>
                    <p className={`${styles.howWorks_movingText_text} ${styles.orange}`}>How Budss Works</p>
                    <p className={`${styles.howWorks_movingText_text} ${styles.border}`}>How Budss Works</p>
                </div>
                <div className={`${styles.scrolling_text} ${styles.marquee2} ${styles.reverse}`}>
                    <p className={`${styles.howWorks_movingText_text} ${styles.orange}`}>How Budss Works</p>
                    <p className={`${styles.howWorks_movingText_text} ${styles.border}`}>How Budss Works</p>
                </div>
            </div>
            <picture>
                <source srcSet={phoneWebp} type="image/webp" className={styles.howWorks_image} />
                <img src={phonePng} alt="Phone" className={styles.howWorks_image} />
            </picture>
        </div>
    </section>
);

HowBudssWorks.propTypes = {};

HowBudssWorks.defaultProps = {};

export default HowBudssWorks;
