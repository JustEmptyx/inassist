import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    file: null,
    policy: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.phone.trim()) newErrors.phone = 'Номер телефона обязателен';
    if (!formData.policy) newErrors.policy = 'Необходимо принять условия';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      // Здесь будет логика отправки формы
      console.log('Форма отправлена', formData);
    }
  };

  return (
    <section className="contacts-section">
      <div className="contacts-container">
        <div className="contact-info">
          <h2 className="contact-heading">СВЯЗАТЬСЯ С НАМИ</h2>
          <div className="contact-item">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p>+375(29)766 85 65</p>
          </div>
          <div className="contact-item">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p>Минский р-н, д. Боровляны,<br/>ул. 40 лет Победы,<br/>микрорайон Светлый, д.ХХ/УУ</p>
          </div>
          <div className="contact-item">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p>contact@optic.by</p>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">ИМЯ<span className="required-star">*</span></label>
              <div className="input-wrapper">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">КОНТАКТНЫЙ НОМЕР<span className="required-star">*</span></label>
                <div className="input-wrapper">
                  <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">E-MAIL</label>
                <div className="input-wrapper">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">ВАШЕ СООБЩЕНИЕ</label>
              <div className="input-wrapper">
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="file-upload">
              <label className="file-label">
                <i className="fa fa-paperclip"></i>
                ПРИКРЕПИТЬ ФАЙЛ
                <input 
                  type="file" 
                  className="file-input" 
                  name="file" 
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-check">
              <input 
                type="checkbox" 
                id="policy" 
                name="policy" 
                checked={formData.policy} 
                onChange={handleChange}
                className={errors.policy ? 'error' : ''}
              />
              <label htmlFor="policy" className={errors.policy ? 'error-text' : ''}>
                Я согласен с <a href="/privacy-policy" className="policy-link">Политикой конфиденциальности</a> и даю согласие на обработку моих персональных данных в соответствии с <a href="/terms" className="policy-link">Политикой конфиденциальности</a>
              </label>
            </div>
            {errors.policy && <span className="error-message policy-error">{errors.policy}</span>}
            <div className="button-container">
              <button type="submit" className="submit-button">ОТПРАВИТЬ ЗАПРОС</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;