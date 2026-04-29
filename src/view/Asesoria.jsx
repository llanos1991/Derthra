import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButtom";
import tesis from '../img/asesoria/ejemplo1.png';
import infra from '../img/asesoria/imasd.png';
import '../styles/Asesoria.css';

function Asesoria() {
  return (
      <>
      <Navbar />
      <section className="asesoria-ingenieria">
        <h2>Asesoría en proyectos de I + D con IA</h2>

        <p>
        Brindamos asesoría especializada en proyectos de investigación, desarrollo e innovación (I+D) basados en inteligencia artificial, 
        acompañando a empresas y profesionales desde la concepción de la idea hasta su implementación. Nuestro enfoque integra análisis técnico,
        diseño de soluciones inteligentes y desarrollo de modelos de IA aplicados a distintos sectores, garantizando soluciones escalables, 
        seguras y alineadas a los objetivos estratégicos de cada organización.
        </p>

        <h3>¿Qué incluye nuestra asesoría?</h3>
        <div className="container">
        <div className="left-div">
          <ul>
            <li>Análisis de necesidades y definición del caso de uso con IA</li>
            <li>Diseño de arquitectura de soluciones basadas en IA (cloud, APIs, microservicios)</li>
            <li>Desarrollo e integración de modelos de inteligencia artificial (voz, texto, imagen)</li>
            <li>Preparación, limpieza y gestión de datos para entrenamiento de modelos</li>
            <li>Seguridad informática y protección de datos</li>
            <li>Pruebas, validación de modelos y control de calidad</li>
            <li>Implementación de pipelines (STT, LLM, TTS, analítica de datos)</li>
            <li>Soporte post-implementación y mantenimiento preventivo</li>
        </ul>
       </div>
       <div className="asesoria-img-container">
            <img src={infra} alt="Asesoria de infraestructura" className="img-estilo" />
       </div>
       </div>
      </section>
          
      <section className="asesoria-tesis">
        <h2>Asesoría academica en el área de sistemas y software</h2>

          <p>
            Brindamos acompañamiento completo en el desarrollo de tesis para estudiantes de Ingeniería de Sistemas e Informática.
            Te guiamos desde la elección del tema hasta la defensa, con enfoque técnico y académico.
          </p>

       <h3>¿Qué incluye nuestra asesoría?</h3>
       <div className="container">
          <div className="left-div">
            <ul>
              <li>Elección y justificación del tema</li>
              <li>Formulación del problema, objetivos y metodología</li>
              <li>Revisión bibliográfica y marco teórico</li>
              <li>Desarrollo del sistema (Java, Python, PHP, etc.)</li>
              <li>Documentación técnica (diagramas, base de datos, pruebas)</li>
              <li>Correcciones de estilo y preparación para la exposición</li>
            </ul>
          </div>
          
          <div className="asesoria-img-container">
            <img src={tesis} alt="Asesoria de tesis" className="img-estilo" />
          </div>
        </div>   
      <h3>Reducción de Similitud</h3>
          <p>
            Optimizamos la redacción para disminuir el porcentaje de similitud en Turnitin.
            Aplicamos buenas prácticas de citación y redacción académica para lograr una entrega original y de calidad.
          </p>

          <p>Contáctanos para recibir asesoría profesional y personalizada para tu proyecto de tesis.</p>
      </section>
      <WhatsAppButton />
      <Footer />
      </>
  );
}

export default Asesoria;


