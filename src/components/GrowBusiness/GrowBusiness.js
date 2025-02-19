import React from 'react';
import PropTypes from 'prop-types';
import styles from './GrowBusiness.module.css';

const GrowBusiness = () => (
  <section className={styles.growBusiness}>
    <div className={`container ${styles.growBusiness_border}`}>
        <h2 className={styles.growBusiness_title}>Let Your Business Grow</h2>
        <button id="contact_button" className={`button ${styles.growBusiness_button}`}>Contact sales</button>
    </div>
</section>
);

GrowBusiness.propTypes = {};

GrowBusiness.defaultProps = {};

export default GrowBusiness;
