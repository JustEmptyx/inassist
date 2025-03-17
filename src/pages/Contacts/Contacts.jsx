import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    policy: false,
    file: null
  });
  
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState('');
  const [inputFocus, setInputFocus] = useState({
    name: false,
    phone: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      if (files && files[0]) {
        setFileName(files[0].name);
        setFormData(prev => ({ ...prev, file: files[0] }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
      
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }
  };

  const handleFocus = (field) => {
    setInputFocus(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setInputFocus(prev => ({ ...prev, [field]: false }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите ваш номер телефона';
    } else if (!/^\+?[0-9\s-()]{10,}$/i.test(formData.phone.trim())) {
      newErrors.phone = 'Пожалуйста, введите корректный номер телефона';
    }
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }
    
    if (!formData.policy) {
      newErrors.policy = 'Вы должны согласиться с политикой конфиденциальности';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        policy: false,
        file: null
      });
      setFileName('');
    } else {
      setErrors(validationErrors);
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
            <p>+375(29)367-54-58<br/>+375(44)728-50-16</p>
          </div>
          <div className="contact-item">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p>г. Минск, ул. Короля 2<br/></p>
          </div>
          <div className="contact-item">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p>pis@pis.by</p>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-wrapper">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  className={errors.name ? 'error' : ''}
                  placeholder=""
                />
                {(!inputFocus.name || !formData.name) && (
                  <div className="placeholder-text">
                    ИМЯ<span className="required-star">*</span>
                  </div>
                )}
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <div className="input-wrapper">
                  <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    onFocus={() => handleFocus('phone')}
                    onBlur={() => handleBlur('phone')}
                    className={errors.phone ? 'error' : ''}
                    placeholder=""
                  />
                  {(!inputFocus.phone || !formData.phone) && (
                    <div className="placeholder-text">
                      НОМЕР ТЕЛЕФОНА<span className="required-star">*</span>
                    </div>
                  )}
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    className={errors.email ? 'error' : ''}
                    placeholder=""
                  />
                  {(!inputFocus.email || !formData.email) && (
                    <div className="placeholder-text">
                      EMAIL
                    </div>
                  )}
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  placeholder=""
                ></textarea>
                {(!inputFocus.message || !formData.message) && (
                  <div className="placeholder-text textarea-placeholder">
                    ВАШЕ СООБЩЕНИЕ
                  </div>
                )}
              </div>
            </div>
            <div className="file-upload">
              <label className="file-label">
                <FontAwesomeIcon icon={faPaperclip} className="file-icon" />
                <span className="file-text">ПРИКРЕПИТЬ ФАЙЛ</span>
                <input 
                  type="file" 
                  className="file-input" 
                  name="file" 
                  onChange={handleChange}
                />
              </label>
              {fileName && <span className="file-name">{fileName}</span>}
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
                Я согласен с Политикой конфиденциальности и даю согласие на обработку моих персональных данных в соответствии с <a href="/terms" className="policy-link">Политикой конфиденциальности</a>
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