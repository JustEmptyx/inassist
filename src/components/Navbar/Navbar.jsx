import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item white">
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            О НАС
          </NavLink>
        </li>
        <li className="nav-item white">
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            УСЛУГИ
          </NavLink>
        </li>
        <li className="nav-item white">
          <NavLink 
            to="/partners" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            ПАРТНЕРЫ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;