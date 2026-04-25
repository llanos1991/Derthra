import React from 'react';
import '../styles/Fundador.css';
import christopherImg from '../img/integrantes/christopher_1.png'; // Asegúrate que la imagen esté en esa ruta
import WhatsAppButton from './WhatsAppButtom';

function Fundador() {
  return (
    <section className="clientes contenedor">
      <h2 className="titulo">Fundador</h2>
      <div className="cards">
        {/* Puedes agregar más fundadores aquí si lo necesitas */}
        <div className="card">
          <img src={christopherImg} alt="Msc. Christopher Josue Llanos Vasquez" />
          <div className="contenido-texto-card">
            <h4>Msc. Ing. Christopher Josue Llanos Vasquez</h4>
            <p>
              Desarrollador de software para sistemas criticos en el area de transporte y militar, Analista desarrollador en lenguajes como Java,python,C++,ADA. 
            </p>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </section>
  );
}

export default Fundador;