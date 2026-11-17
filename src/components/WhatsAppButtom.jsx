import React from 'react';
import '../styles/WhatsAppButton.css';
import whatsapp from '../img/servicios/iconow.svg';

const WhatsAppButton = () => {
  const messageStart = encodeURIComponent("¡Hola! ");
  const messageEnd = encodeURIComponent(" ¿Te interesa una asesoría, un proyecto tecnológico o nuestros cursos? Estamos para ayudarte.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=51956397062&text=${messageStart}%E2%9C%8B%EF%B8%8F${messageEnd}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contactar a DERTHRA por WhatsApp"
    >
      <img
        src= {whatsapp}
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
