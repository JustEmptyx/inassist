import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            ABOUT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            SERVICES
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/partners" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            PARTNERS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;