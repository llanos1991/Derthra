import React from 'react';
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButtom";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import '../styles/Practica.css';

function Practica() {
  return (
    <>
      <Navbar />

      {/* ===== SECCIÓN INTRO ===== */}
      <section className="practica-intro">
        <h1>Prácticas Profesionales en DERTHRA</h1>
        <p>
          ¿Eres estudiante y buscas una oportunidad para aplicar tus conocimientos en el mundo real? 
          En <strong>DERTHRA</strong> ofrecemos un espacio único para que desarrolles tus habilidades técnicas 
          en un ambiente profesional. Trabaja en proyectos innovadores que impactan positivamente 
          a instituciones educativas y municipalidades. 
          Únete a nuestro equipo y aprovecha la oportunidad de aprender, crecer y contribuir 
          en soluciones tecnológicas mientras construyes tu futuro profesional.
        </p>
      </section>

      {/* ===== SECCIÓN REQUISITOS ===== */}
      <section className="practica-requisitos">
        <h2>Requisitos para Postular</h2>
        <ul>
          <li>Estar matriculado en una universidad o instituto en el área de tecnología, ingeniería o afines.</li>
          <li>Conocimientos básicos relacionados con el área en la que se desea aplicar (por ejemplo, desarrollo de software o redes).</li>
          <li>Disponibilidad de tiempo para realizar las prácticas (medio tiempo o tiempo completo, según el acuerdo).</li>
          <li>Interés y motivación por aprender y formar parte de proyectos innovadores.</li>
        </ul>
      </section>

      {/* ===== FORMULARIO ===== */}
      <Formulario />

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Practica;

