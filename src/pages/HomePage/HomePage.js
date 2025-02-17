import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.css';
import Hero from '../../components/Hero/Hero';
import About from '../../components/AboutBudss/AboutBudss';
import HowWorks from '../../components/HowBudssWorks/HowBudssWorks';
import Percentages from '../../components/Percentages/Percentages';
import WhyBudss from '../../components/WhyBudss/WhyBudss';
import GrowBusiness from '../../components/GrowBusiness/GrowBusiness';
import Awareness from '../../components/Awareness/Awareness';

const HomePage = () => (
  <main>
    <Hero />
    <About />
    <HowWorks />
    <Percentages />
    <WhyBudss />
    <GrowBusiness />
    <Awareness />
  </main>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
