import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButtom';
import tesis from '../img/asesoria/ejemplo1.png';
import infra from '../img/asesoria/imasd.png';
import '../styles/Asesoria.css';
import PageSEO from '../components/PageSEO';

const aiServices = [
  'Análisis de necesidades y definición del caso de uso con IA',
  'Diseño de arquitectura de soluciones basadas en IA (cloud, APIs, microservicios)',
  'Desarrollo e integración de modelos de inteligencia artificial (voz, texto, imagen)',
  'Preparación, limpieza y gestión de datos para entrenamiento de modelos',
  'Seguridad informática y protección de datos',
  'Pruebas, validación de modelos y control de calidad',
  'Implementación de pipelines (STT, LLM, TTS, analítica de datos)',
  'Soporte post-implementación y mantenimiento preventivo',
];

const academicServices = [
  'Elección y justificación del tema',
  'Formulación del problema, objetivos y metodología',
  'Revisión bibliográfica y marco teórico',
  'Desarrollo del sistema (Java, Python, PHP, etc.)',
  'Documentación técnica (diagramas, base de datos, pruebas)',
  'Correcciones de estilo y preparación para la exposición',
];

function ServiceList({ items, label }) {
  return (
    <ul className="advisory-list" aria-label={label}>
      {items.map((item, index) => (
        <li key={item}>
          <span className="advisory-list-number" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Asesoria() {
  return (
    <>
      <PageSEO
        title="Asesoría tecnológica e inteligencia artificial | DERTHRA"
        description="Asesoría tecnológica, proyectos de inteligencia artificial e investigación aplicada. DERTHRA acompaña a empresas, profesionales y estudiantes en Perú."
        path="/asesoria"
      />
      <Navbar />
      <main className="asesoria-page">
        <section className="advisory-hero" aria-labelledby="advisory-ai-title">
          <div className="advisory-hero-copy">
            <p className="advisory-eyebrow">Asesoría tecnológica</p>
            <h1 id="advisory-ai-title">Proyectos de I+D con inteligencia artificial</h1>
            <p className="advisory-hero-description">
              Acompañamos a empresas y profesionales desde la definición de la idea
              hasta su implementación. Integramos análisis técnico, diseño de
              soluciones y desarrollo de modelos de IA aplicados a distintos sectores.
            </p>
          </div>
          <figure className="advisory-hero-visual">
            <img src={infra} alt="Prototipo electrónico para proyectos de investigación y desarrollo" />
            <figcaption>Investigación, prototipado e inteligencia artificial</figcaption>
          </figure>
        </section>

        <section className="advisory-section advisory-ai-section" aria-labelledby="advisory-ai-services-title">
          <div className="advisory-section-heading">
            <p className="advisory-eyebrow">De la idea a la implementación</p>
            <h2 id="advisory-ai-services-title">¿Qué incluye nuestra asesoría tecnológica?</h2>
            <p>
              Un acompañamiento técnico para diseñar soluciones escalables,
              seguras y alineadas con los objetivos de cada proyecto.
            </p>
          </div>
          <div className="advisory-ai-content">
            <ServiceList items={aiServices} label="Servicios de asesoría en inteligencia artificial" />
            <aside className="advisory-note">
              <span className="advisory-note-mark" aria-hidden="true">IA</span>
              <div>
                <h3>Soluciones aplicadas</h3>
                <p>Voz, texto, imagen, analítica de datos e integración con sistemas existentes.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="advisory-academic-section" aria-labelledby="advisory-academic-title">
          <div className="advisory-academic-inner">
            <div className="advisory-section-heading advisory-academic-heading">
              <p className="advisory-eyebrow">Acompañamiento académico</p>
              <h2 id="advisory-academic-title">Asesoría académica en sistemas</h2>
              <p>
                Guiamos a estudiantes de Ingeniería de Sistemas e Informática en el
                desarrollo de tesis y proyectos, desde la elección del tema hasta la defensa.
              </p>
            </div>

            <div className="advisory-academic-layout">
              <div className="advisory-academic-content">
                <h3>Te acompañamos en cada etapa</h3>
                <ServiceList items={academicServices} label="Etapas de asesoría académica" />
              </div>
              <figure className="advisory-academic-visual">
                <img src={tesis} alt="Proyecto académico de software presentado en una pantalla interactiva" />
              </figure>
            </div>

            <div className="advisory-similarity">
              <div className="advisory-similarity-heading">
                <span aria-hidden="true">01</span>
                <h3>Reducción de similitud</h3>
              </div>
              <p>
                Optimizamos la redacción para disminuir el porcentaje de similitud en
                Turnitin. Aplicamos buenas prácticas de citación y redacción académica
                para lograr una entrega original y de calidad.
              </p>
              <p className="advisory-similarity-contact">
                Contáctanos para recibir asesoría profesional y personalizada para tu proyecto de tesis.
              </p>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Asesoria;
