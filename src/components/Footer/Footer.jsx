import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/FullLogo/inAssist_Full_Logo_WHITE.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo-container">
            <Link to="/">
                <img src={logo} alt="InAssist Logo" className="footer-logo" />
            </Link>
          </div>
          <div className="footer-address">
            <p>Belarus,Minsk, street address,
               Belarus, Minsk, street address,
               Belarus, Minsk, street address</p>
          </div>
          <div className="footer-contact">
            <a href="mailto:contact@inassist.by">contact@inassist.by</a>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="social-icon other">
              <i className="fas fa-circle"></i>
            </a>
          </div>
        </div>

        <div className="footer-center">
          <div className="footer-nav">
            <div className="footer-nav-column">
              <Link to="/Services">Services</Link>
              <Link to="/About">About</Link>
              <Link to="/Contacts">Contacts</Link>
              <Link to="/Partners">Partners</Link>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-copyright">
            <p>Все права защищены.</p>
            <Link to="/privacy-policy">Политика конфиденциальности и обработки данных</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;