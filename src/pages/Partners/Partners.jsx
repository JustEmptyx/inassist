
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
          <img src={logoSamocat} alt="Самокат" />
        </div>
        <div className="partner-logo">
          <img src={logoX5Group} alt="X5group" />
        </div>
        <div className="partner-logo">
          <img src={logoVK} alt="ВКонтакте" />
        </div>
        <div className="partner-logo">
          <img src={logoOstrovok} alt="Островок!" />
        </div>
        <div className="partner-logo">
          <img src={logoVCRu} alt="vc.ru" />
        </div>
        <div className="partner-logo">
          <img src={logoAmedi} alt="AMEDI" />
        </div>
      </div>
    </div>
  );
}

export default Partners;