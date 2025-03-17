
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/FullLogo/inAssist_Full_Logo.png';
import ParallelogramPattern from '../../components/PatternElements/ParallelogramPattern';

const Home = () => {
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('.header');
      if (headerElement) {
        const headerHeight = headerElement.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <div className="home">
      <div className="hero-block">
        <div className="hero-rectangle">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="hero-logo" />
          </div>
          
          <ParallelogramPattern position="top-right" color="#92dfd8" />
          <ParallelogramPattern position="bottom-left" color="#92dfd8" />
          
          <div className="hero-content">
            <div className="hero-heading">
              <h2>Инновационные решения для инновационного бизнеса</h2>
              <p className="hero-description">
                Наша компания предоставляет услуги по дизайну, разработке, 
                продвижению и сопровождению сайтов
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;