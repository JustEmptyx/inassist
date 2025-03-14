import React from 'react';
import './Contacts.css';
import ContactsForm from './ContactsForm/ContactsForm';
const Contacts = () => {
  return (
    <section id="contacts" className='contacts-section'>
        <div className='container'>
            <ContactsForm/>
        </div>
    </section>
  );
};

export default Contacts;