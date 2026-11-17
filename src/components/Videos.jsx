import React from "react";
import "../styles/Videos.css";

function Videos({ title, description, listItems, videoSrc }) {
  return (
    <section className="videos-section" aria-label={title}>
      <div className="videos-container">
        <div className="videos-text">
          <span className="videos-eyebrow">DERTHRA CODE · FORMACIÓN EN PROGRAMACIÓN</span>
          <h2>{title}</h2>
          <p className="videos-description">{description}</p>
          <h3 className="videos-list-title">¿Qué podrás explorar?</h3>
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="videos-frame">
          <video controls className="video-player" preload="metadata" playsInline>
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta video.
          </video>
          <span className="videos-frame-caption">Contenido del curso</span>
        </div>
      </div>
    </section>
  );
}

export default Videos;
