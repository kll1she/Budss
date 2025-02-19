import React from 'react';
import PropTypes from 'prop-types';
import styles from './WhyBudss.module.css';

import underImagePng from '../../assets/img/png/underImage.png';
import underImageWebp from '../../assets/img/webp/underImage.webp';

import loyalPCPng from '../../assets/img/png/loyalPC.png';
import loyalMobilePng from '../../assets/img/png/loyalMobile.png';
import loyalPCWebp from '../../assets/img/webp/loyalPC.webp';
import loyalMobileWebp from '../../assets/img/webp/loyalMobile.webp';

import pocketsPCPng from '../../assets/img/png/pocketsPC.png';
import pocketsMobilePng from '../../assets/img/png/pocketsMobile.png';
import pocketsPCWebp from '../../assets/img/webp/pocketsPC.webp';
import pocketsMobileWebp from '../../assets/img/webp/pocketsMobile.webp';

import cashbackPCPng from '../../assets/img/png/cashbackPC.png';
import cashbackMobilePng from '../../assets/img/png/cashbackMobile.png';
import cashbackPCWebp from '../../assets/img/webp/cashbackPC.webp';
import cashbackMobileWebp from '../../assets/img/webp/cashbackMobile.webp';

import aiPCPng from '../../assets/img/png/aiPC.png';
import aiMobilePng from '../../assets/img/png/aiMobile.png';
import aiPCWebp from '../../assets/img/webp/aiPC.webp';
import aiMobileWebp from '../../assets/img/webp/aiMobile.webp';

const WhyBudss = () => (
  <section className={styles.whyBudss}>
    <div className="container">
        <div className={styles.whyBudss_wrapper}>
            <h2 className={styles.whyBudss_title}>Why Budss</h2>
            <p className={styles.whyBudss_text}>We Provide Advanced Payment Solutions To Grow Your Business</p>
            <picture>
                <source srcSet={underImageWebp} type="image/webp" className={styles.whyBudss_image} />
                <img src={underImagePng} alt="Image under text" className={styles.whyBudss_image} />
            </picture>
        </div>
        <div className={styles.whyBudss_reasons}>
            <div className={`${styles.whyBudss_reasons_block} ${styles.first_block}`} id="first">
                <h3 className={`${styles.whyBudss_reasons_block_title} ${styles.first_text}`}>Turn your customers into loyal influencers</h3>
                <p className={`${styles.whyBudss_reasons_block_text} ${styles.first_text}`}>Budss helps businesses harness the exponential power of loyal customers for acquisition and retention.</p>
                <picture>
                    <source media="(min-width: 1320px)" srcSet={loyalPCPng} className={`${styles.whyBudss_reasons_block_image} ${styles.first}`} />
                    <source media="(max-width: 1300px)" srcSet={loyalMobilePng} className={`${styles.whyBudss_reasons_block_image} ${styles.first}`} />
                    <source media="(min-width: 1320px)" srcSet={loyalPCWebp} type="image/webp" className={`${styles.whyBudss_reasons_block_image} ${styles.first}`} />
                    <source media="(max-width: 1300px)" srcSet={loyalMobileWebp} type="image/webp" className={`${styles.whyBudss_reasons_block_image} ${styles.first}`} />
                    <img src={loyalPCPng} alt="Provide" className={`${styles.whyBudss_reasons_block_image} ${styles.first}`} />
                </picture>
            </div>
            <div className={`${styles.whyBudss_reasons_block} ${styles.second_block}`} id="second">
                <h3 className={`${styles.whyBudss_reasons_block_title} ${styles.second_text}`}>Harness the power of buying in bulk</h3>
                <p className={`${styles.whyBudss_reasons_block_text} ${styles.second_text}`}>Get at least 2X more sales with Budss Buying Groups. Your customer base will grow exponentially as your customers add their friends & family to your personalized group.</p>
                <picture>
                    <source media="(min-width: 1320px)" srcSet={pocketsPCPng} className={`${styles.whyBudss_reasons_block_image} ${styles.second}`} />
                    <source media="(max-width: 1300px)" srcSet={pocketsMobilePng} className={`${styles.whyBudss_reasons_block_image} ${styles.second}`} />
                    <source media="(min-width: 1320px)" srcSet={pocketsPCWebp} type="image/webp" className={`${styles.whyBudss_reasons_block_image} ${styles.second}`} />
                    <source media="(max-width: 1300px)" srcSet={pocketsMobileWebp} type="image/webp" className={`${styles.whyBudss_reasons_block_image} ${styles.second}`} />
                    <img src={pocketsPCPng} alt="Harness" className={`${styles.whyBudss_reasons_block_image} ${styles.second}`} />
                </picture>
            </div>
            <div className={`${styles.whyBudss_reasons_block} ${styles.third_block}`} id="third">
                <h3 className={`${styles.whyBudss_reasons_block_title} ${styles.third_text}`}>Supercharge Loyalty With Instant Cash Back</h3>
                <p className={`${styles.whyBudss_reasons_block_text} ${styles.third_text}`}>Budss allows for shoppers to earn immediate cash back at their favorite stores.</p>
                <picture>
                    <source media="(min-width: 1320px)" srcSet={cashbackPCPng} className={`${styles.whyBudss_reasons_block_image} ${styles.third}`} />
                    <source media="(max-width: 1300px)" srcSet={cashbackMobilePng} className={`${styles.whyBudss_reasons_block_image} ${styles.third}`} />
                    <source media="(min-width: 1320px)" srcSet={cashbackPCWebp} type="image/webp" className={`${styles.whyBudss_reasons_block_image} ${styles.third}`} />
                    <source media="(max-width: 1300px)" srcSet={cashbackMobileWebp} type="image/webp" className={`${styles.whyBudss_reasons_block_image} ${styles.third}`} />
                    <img src={cashbackPCPng} alt="Loyalty" className={`${styles.whyBudss_reasons_block_image} ${styles.third}`} />
                </picture>
            </div>
            <div className={`${styles.whyBudss_reasons_block} ${styles.four_block}`} id="four">
                <h3 className={`${styles.whyBudss_reasons_block_title} ${styles.four_text}`}>Seasoned with AI and Gamification</h3>
                <p className={`${styles.whyBudss_reasons_block_text} ${styles.four_text}`}>AI programming creates a personalized customer journey, offering recommendations for their next purchase and optimizing rewards for after purchase.</p>
                <picture>
                    <source media="(min-width: 1320px)" srcSet={aiPCPng} className={`${styles.whyBudss_reasons_block_image} ${styles.four}`} />
                    <source media="(max-width: 1300px)" srcSet={aiMobilePng} className={`${styles.whyBudss_reasons_block_image} ${styles.four}`} />
                    <source media="(min-width: 1320px)" srcSet={aiPCWebp} type="image/webp" className={`${styles.whyBudss_reasons_block_image} ${styles.four}`} />
                    <source media="(max-width: 1300px)" srcSet={aiMobileWebp} type="image/webp" className={`${styles.whyBudss_reasons_block_image} ${styles.four}`} />
                    <img src={aiPCPng} alt="ai" className={`${styles.whyBudss_reasons_block_image} ${styles.four}`} />
                </picture>
            </div>
        </div>
    </div>
  </section>
);

WhyBudss.propTypes = {};

WhyBudss.defaultProps = {};

export default WhyBudss;
