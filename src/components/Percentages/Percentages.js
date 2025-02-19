import React from 'react';
import PropTypes from 'prop-types';
import styles from './Percentages.module.css';

const Percentages = () => (
  <section className={styles.percentages}>
      <div className={`container ${styles.percentages_wrapper}`}>
          <div className={styles.percentages_element}>
              <h3 className={styles.percentages_element_number}>15%</h3>
              <p className={styles.percentages_element_text}>Increase in Purchase Amount</p>
          </div>
          <div className={styles.percentages_element}>
              <h3 className={styles.percentages_element_number}>30%</h3>
              <p className={styles.percentages_element_text}>Growth in Annual Sales</p>
          </div>
          <div className={styles.percentages_element}>
              <h3 className={styles.percentages_element_number}>10%</h3>
              <p className={styles.percentages_element_text}>Growth in New Customers</p>
          </div>
      </div>
  </section>
);

Percentages.propTypes = {};

Percentages.defaultProps = {};

export default Percentages;
