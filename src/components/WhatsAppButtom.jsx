import React from 'react';
import '../styles/WhatsAppButton.css';
import whatsapp from '../img/servicios/iconow.svg';

const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/51956397062" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <img
        src= {whatsapp}
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
