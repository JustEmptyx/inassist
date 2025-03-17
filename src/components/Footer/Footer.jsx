import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/FullLogo/inAssist_Full_Logo_WHITE.png';
import './Footer.css';
// import ParallelogramPattern from '../components/ParallelogramPattern/ParallelogramPattern';
import ParallelogramPattern from '../PatternElements/ParallelogramPattern'
const Footer = () => {
  return (
    <footer className="footer">
      {/* Верхняя навигация с якорями */}
      <div className="footer-top-nav">
        <HashLink smooth to="#services">Услуги</HashLink>
        <HashLink smooth to="#about">О нас</HashLink>
        <HashLink smooth to="#Partners">Партнеры</HashLink>
      </div>
      
      {/* Параллелограммы слева */}
      <div className="footer-pattern-left">
        <ParallelogramPattern 
          position="bottom-left" 
          color="white" 
          opacity={0.8} 
        />
      </div>
      
      {/* Основной контент футера */}
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-container">
            <Link to="/">
              <img src={logo} alt="InAssist Logo" className="footer-logo" />
            </Link>
          </div>
          
          <div className="footer-info">
            <div className="footer-company-name">
              <p>ООО «ИнАссист»</p>
              <a href="https://inassist.by" target="_blank" rel="noopener noreferrer">www.inassist.by</a>
            </div>
            
            <div className="footer-address">
              <p>Беларусь, г. Минск,</p>
              <p>ул. Короля 2</p>
            </div>
            
            <div className="footer-contact">
              <a href="mailto:contact@inassist.by">contact@inassist.by</a>
            </div>
            
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/inassist" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="social-icon other">
                <i className="fas fa-circle"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-copyright">
            <p>Все права защищены.</p>
            <Link to="/privacy-policy">Политика конфиденциальности и обработки данных</Link>
          </div>
        </div>
      </div>
      
      {/* Параллелограммы справа */}
      <div className="footer-pattern-right">
        <ParallelogramPattern 
          position="top-right" 
          color="white" 
          opacity={0.8} 
        />
      </div>
    </footer>
  );
};

export default Footer;