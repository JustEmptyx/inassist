
import React from 'react';
import './Partners.css';

import logoSamocat from '../../assets/partners/samokat.png';
import logoX5Group from '../../assets/partners/x5group.png';
import logoVK from '../../assets/partners/vk.png';
import logoOstrovok from '../../assets/partners/ostrovok.png';
import logoVCRu from '../../assets/partners/vcru.png';
import logoAmedi from '../../assets/partners/amedi.png';

function Partners() {
  return (
    <div className="partners-container">
      <h2 className="partners-heading">
        Создавайте и развивайте<br />
        цифровые продукты на базе нашей<br />
        надежной IT-инфраструктуры
      </h2>
      <div className="partners-logo-grid">
        <div className="partner-logo">
          <a href="https://samokat.tech" target="_blank" rel="noopener noreferrer">
            <img src={logoSamocat} alt="Самокат" />
          </a>
        </div>
        <div className="partner-logo">
          <a href="https://x5.ru" target="_blank" rel="noopener noreferrer">
            <img src={logoX5Group} alt="X5group" />
          </a>
        </div>
        <div className="partner-logo">
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <img src={logoVK} alt="ВКонтакте" />
          </a>
        </div>
        <div className="partner-logo">
          <a href="https://ostrovok.ru" target="_blank" rel="noopener noreferrer">
            <img src={logoOstrovok} alt="Островок!" />
          </a>
        </div>
        <div className="partner-logo">
          <a href="https://vc.ru" target="_blank" rel="noopener noreferrer">
            <img src={logoVCRu} alt="vc.ru" />
          </a>
        </div>
        <div className="partner-logo">
          <a href="https://amedi.ru" target="_blank" rel="noopener noreferrer">
            <img src={logoAmedi} alt="AMEDI" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Partners;