import React, { useState } from 'react';
import './Services.css';
import pic1 from '../../assets/FullLogo/inAssist_Full_Logo_GRAPHITE.png';
import pic2 from '../../assets/FullLogo/inAssist_Full_Logo_GRAPHITE.png';
import pic3 from '../../assets/FullLogo/inAssist_Full_Logo_GRAPHITE.png';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Бизнес-консалтинг',
      image: pic1,
      description: 'Занимаемся разработкой бизнес-планов, инновационных проектов, технико-экономических обоснований. Поможем Вам привлечь финансирование и вступить в технопарк.'
    },
    {
      id: 2,
      title: 'Рекламное продвижение',
      image: pic2,
      description: 'Предлагаем профессиональное управление рекламными компаниями в Google Ads и Яндекс Директ. Привлечем к Вам новых клиентов и увеличим продажи.'
    },
    {
      id: 3,
      title: 'IT-консалтинг',
      image: pic3,
      description: 'Создаем сайты и разрабатываем программные решения. Внедрим в Ваши бизнес-процессы цифровые технологии.'
    }
  ];

  const getCardClass = (index) => {
    let classes = "service-card";
    
    if (hoveredCard === 1) {
      if (index === 1) classes += " hovered";
      if (index === 2 || index === 3) classes += " move-right";
    } else if (hoveredCard === 2) {
      if (index === 2) classes += " hovered";
      if (index === 1) classes += " move-left";
      if (index === 3) classes += " move-right";
    } else if (hoveredCard === 3) {
      if (index === 3) classes += " hovered";
      if (index === 1 || index === 2) classes += " move-left";
    }
    
    return classes;
  };

  return (
    <section id="services" className="services">
      <div className="services-header">
        <h2 className="services-title">Наши услуги</h2>
        <p className="services-subtitle">
          Комплексные решения для развития вашего бизнеса
        </p>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={getCardClass(service.id)}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;