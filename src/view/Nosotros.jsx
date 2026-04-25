import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButtom";
import '../styles/Nosotros.css';

function Nosotros() {
  return (
    <>
      <Navbar />

      {/* ===== SECCIÓN HISTORIA ===== */}
      <section className="nosotros-section">
        <h1>¿Cómo inicia DERTHRA?</h1>
        <p>
          DERTHRA nace como la evolución de un startup peruana creada en 2018 
          por un grupo de estudiantes universitarios con habilidades en el desarrollo de sistemas y aplicaciones, 
          enfocados en tecnologías disruptivas como:
        </p>
        <ul>
          <li>Internet de las Cosas (IoT)</li>
          <li>Machine Learning</li>
          <li>Big Data</li>
          <li>Seguridad Informática</li>
          <li>Reconocimiento de Imágenes con Python</li>
          <li>Realidad Aumentada</li>
        </ul>
        <p>
          La iniciativa surgió al identificar necesidades reales en sectores como la agricultura, la salud y la educación, 
          así como en el fortalecimiento de las micro y pequeñas empresas (MYPES). 
          Esto nos motivó a desarrollar soluciones tecnológicas con impacto real y positivo en la sociedad.
        </p>
      </section>

      {/* ===== SECCIÓN OBJETIVOS ===== */}
      <section className="nosotros-section objetivos">
        <h2>Objetivos</h2>
        <ul>
          <li>Implementar proyectos de I + D en instituciones y empresas.</li>
          <li>Ofrecer soluciones integrales de IA para IoT y sensores.</li>
          <li>Desarrollar sistemas de voz, imagenes y video a través de la IA.</li>
          <li>Brindar asesoría especializada en tesis tecnológicas y de ingeniería.</li>
          <li>Capacitacion a estudiantes y profesionales en proyectos tecnológicos reales.</li>
          <li>Establecer alianzas con instituciones educativas y organismos públicos.</li>
        </ul>
      </section>

      {/* ===== SECCIÓN MISIÓN ===== */}
      <section className="nosotros-section mision">
        <h2>Misión</h2>
        <p>
          Proveer servicios tecnológicos de alta calidad en base a la IA  para nuestros clientes mediante un enfoque práctico, 
          personalizado y con impacto social.
        </p>
      </section>

      {/* ===== SECCIÓN VISIÓN ===== */}
      <section className="nosotros-section vision">
        <h2>Visión</h2>
        <p>
          Ser reconocidos a nivel nacional como el referente en soluciones tecnológicas integrales, 
          contribuyendo a la formación, innovación y transformación digital de instituciones educativas, 
          empresas y gobiernos locales hacia el año 2030.
        </p>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Nosotros;

