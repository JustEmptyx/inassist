import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/FullLogo/inAssist_Full_Logo.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const sections = ['home', 'about', 'services', 'partners', 'contacts'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <HashLink smooth to="#home">
            <img src={logo} alt="InAssist" />
          </HashLink>
        </div>
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><HashLink smooth to="#services" className={activeSection === 'services' ? 'active' : ''}>Услуги</HashLink></li>
            <li><HashLink smooth to="#about" className={activeSection === 'about' ? 'active' : ''}>О нас</HashLink></li>
            <li><HashLink smooth to="#partners" className={activeSection === 'partners' ? 'active' : ''}>Партнеры</HashLink></li>
          </ul>
        </nav>
        <div className="contact-button">
          <HashLink smooth to="#contacts" className="btn-contact">Связаться с нами</HashLink>
        </div>
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;