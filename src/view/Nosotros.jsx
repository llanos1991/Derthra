import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButtom";
import "../styles/Nosotros.css";

const objectives = [
  "Implementar proyectos de investigación y desarrollo en instituciones y empresas.",
  "Ofrecer soluciones de inteligencia artificial para IoT y sensores.",
  "Desarrollar sistemas de voz, imágenes y video mediante inteligencia artificial.",
  "Brindar asesoría especializada en tesis tecnológicas y de ingeniería.",
  "Capacitar a estudiantes y profesionales mediante proyectos tecnológicos reales.",
  "Establecer alianzas con instituciones educativas y organismos públicos.",
];

const technologies = [
  "Internet de las Cosas (IoT)",
  "Machine Learning",
  "Big Data",
  "Seguridad informática",
  "Visión artificial con Python",
  "Realidad aumentada",
];

function Nosotros() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-intro" aria-labelledby="about-title">
          <div className="about-intro-inner">
            <div className="about-intro-copy">
              <span className="about-eyebrow">DERTHRA · QUIÉNES SOMOS</span>
              <h1 id="about-title">Tecnología pensada para generar impacto</h1>
              <p className="about-lead">
                Somos una iniciativa peruana que transforma retos reales en soluciones tecnológicas,
                conectando innovación, formación y asesoría especializada.
              </p>
            </div>
            <div className="about-intro-note" aria-label="Nuestro enfoque">
              <span className="about-note-label">NUESTRO ENFOQUE</span>
              <p>De la investigación a soluciones que responden a necesidades concretas.</p>
              <div className="about-note-areas">
                <span>Investigación</span>
                <span>Desarrollo</span>
                <span>Formación</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-story" aria-labelledby="story-title">
          <div className="about-story-copy">
            <span className="about-kicker">NUESTRO ORIGEN</span>
            <h2 id="story-title">Una idea nacida para resolver necesidades reales</h2>
            <p>
              DERTHRA nace como evolución de un startup peruano creado en 2018 por estudiantes
              universitarios con interés en el desarrollo de sistemas y aplicaciones.
            </p>
            <p>
              La iniciativa surgió al identificar necesidades en sectores como agricultura, salud,
              educación y pequeñas empresas. Desde entonces, trabajamos para crear soluciones
              tecnológicas útiles y con impacto positivo.
            </p>
          </div>
          <div className="about-tech-panel">
            <h3>Áreas que impulsan nuestro trabajo</h3>
            <ul>
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about-objectives" aria-labelledby="objectives-title">
          <div className="about-section-heading">
            <span className="about-kicker">NUESTRO COMPROMISO</span>
            <h2 id="objectives-title">Objetivos claros, enfocados en resultados</h2>
            <p>
              Definimos prioridades concretas para orientar nuestros servicios y el trabajo con cada organización.
            </p>
          </div>
          <div className="objectives-grid">
            {objectives.map((objective, index) => (
              <article className="objective-card" key={objective}>
                <span className="objective-number">{String(index + 1).padStart(2, "0")}</span>
                <p>{objective}</p>
                <span className="objective-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-direction" aria-label="Misión y visión">
          <article className="direction-card direction-mission">
            <span className="direction-index">01 · PROPÓSITO</span>
            <h2>Misión</h2>
            <p>
              Proveer servicios tecnológicos de alta calidad basados en inteligencia artificial,
              con un enfoque práctico, personalizado y de impacto social.
            </p>
          </article>
          <article className="direction-card direction-vision">
            <span className="direction-index">02 · FUTURO</span>
            <h2>Visión</h2>
            <p>
              Ser reconocidos a nivel nacional como referentes en soluciones tecnológicas integrales,
              contribuyendo a la formación, innovación y transformación digital de instituciones
              educativas, empresas y gobiernos locales hacia 2030.
            </p>
          </article>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Nosotros;
