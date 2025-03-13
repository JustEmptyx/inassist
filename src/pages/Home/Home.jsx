import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
const Home = () => {
  return (
    <div className="home">
        <div className="hero-block">
          <div className="hero-content">
            <div className="hero-heading">
              <h2>Инновационные решения для инновационного бизнеса</h2>
              <p className="hero-description">
                Наша компания предоставляет услуги по дизайну, разработке, 
                продвижению и сопровождению сайтов
              </p>
              <div className="hero-buttons">
                <Link to="/portfolio" className="btn btn-primary">
                  ПОРТФОЛИО
                  <span className="arrow-icon">→</span>
                </Link>
                <HashLink smooth to="#services" className="btn btn-secondary">УСЛУГИ</HashLink>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;