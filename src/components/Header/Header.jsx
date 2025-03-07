import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="InAssist Logo" className="logo" />
          </Link>
        </div>
        
        <Navbar />

        <div className="contact-button-container">
          <Link to="/contacts" className="contact-button">
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;