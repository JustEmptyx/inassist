import React, { useState, useRef, useEffect } from 'react';
import countryData from './CountryData';
import './ContactsForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }
    
    if (formData.phone.trim() && !/^\d{7,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Пожалуйста, введите корректный номер телефона';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const fullPhoneNumber = formData.phone ? `${selectedCountry.dialCode}${formData.phone}` : '';
      
      const submissionData = {
        ...formData,
        phone: fullPhoneNumber
      };

      console.log('Form submitted:', submissionData);
      
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      
      alert('Спасибо! Ваше сообщение отправлено.');
    }
  };

  return (
    <div className="contact-form-container">
      <h1>Свяжитесь с нами</h1>
      <div className="contact-description">
        Заполните форму ниже, и мы свяжемся с вами, чтобы обсудить, как мы можем помочь вашему бизнесу.
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="company"
              placeholder="Компания"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <div className={`phone-group ${errors.phone ? 'error' : ''}`}>
              <div className="country-dropdown" ref={dropdownRef}>
                <div className="selected-country" onClick={toggleDropdown}>
                  <img src={selectedCountry.flag} alt={selectedCountry.code} className="flag" />
                  <span className="country-code">{selectedCountry.dialCode}</span>
                  <span className="dropdown-arrow">▼</span>
                </div>
                {dropdownOpen && (
                  <div className="countries-list">
                    {countryData.map((country) => (
                      <div
                        key={country.code}
                        className="country-item"
                        onClick={() => selectCountry(country)}
                      >
                        <img src={country.flag} alt={country.code} className="flag" />
                        <span className="country-name">{country.name}</span>
                        <span className="country-code">{country.dialCode}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>
        </div>
        <div className="form-group full-width">
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="submit-group">
          <button type="submit" className="submit-button">Связаться с нами</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;