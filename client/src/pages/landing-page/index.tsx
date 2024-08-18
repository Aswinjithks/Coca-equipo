import React from 'react';
import Navbar from '@components/landing-page/nav';
import ComplementaryFeatures from '@components/landing-page/complementary-features';
import FAQ from '@components/landing-page/faq';
import './LandingPage.css';
import Advanteges from '@components/landing-page/advanteges';
import rounds from '@assets/svg/shapes.svg'
import Home from '@components/landing-page/home';
import GoogleLoginPopup from '@components/googleSignup';
import { Navigate } from 'react-router-dom';


const LandingPage = () => {


  return (
    <div className="landing-container">
      <Navbar />
      <Home />
      <ComplementaryFeatures />
      <Advanteges />
      <FAQ />
    </div>
  );
};

export default LandingPage;
