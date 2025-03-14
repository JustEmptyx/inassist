import React, { useState } from 'react';
import './Services.css';
import pic1 from '../../assets/FullLogo/inAssist_Full_Logo_GRAPHITE.png';
import pic2 from '../../assets/FullLogo/inAssist_Full_Logo_GRAPHITE.png';
import pic3 from '../../assets/FullLogo/inAssist_Full_Logo_GRAPHITE.png';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" className="services">
      <div className="hero-block-services">
        <div className="hero-content">
          <div className="services-cards">
            <div 
              className={`service-card ${hoveredCard === 1 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="service-title">Бизнес-консалтинг</h3>
              <div className="service-content">
                <div className="image-container">
                  <img src={pic1} alt="Бизнес-консалтинг" className="service-image" />
                </div>
                <div className="service-description">
                  <p>
                    Занимаемся разработкой бизнес-планов, инновационных проектов, 
                    технико-экономических обоснований. Поможем Вам привлечь 
                    финансирование и вступить в технопарк.
                  </p>
                </div>
              </div>
            </div>

            <div 
              className={`service-card service-card-reverse ${hoveredCard === 2 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="service-title">Веб-разработка</h3>
              <div className="service-content">
                <div className="image-container image-right">
                  <img src={pic2} alt="Веб-разработка" className="service-image" />
                </div>
                <div className="service-description description-right">
                  <p>
                    Создаем современные и функциональные сайты с адаптивным дизайном. 
                    Разрабатываем интернет-магазины, корпоративные сайты, лендинги и 
                    порталы любой сложности.
                  </p>
                </div>
              </div>
            </div>

            <div 
              className={`service-card ${hoveredCard === 3 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="service-title">Digital-маркетинг</h3>
              <div className="service-content">
                <div className="image-container">
                  <img src={pic3} alt="Digital-маркетинг" className="service-image" />
                </div>
                <div className="service-description">
                  <p>
                    Проводим комплексные маркетинговые кампании, SEO-оптимизацию, 
                    контекстную рекламу. Продвигаем ваш бизнес в социальных сетях 
                    и повышаем конверсии.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;