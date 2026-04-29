import React from "react";
import "../styles/Videos.css";

function Videos({ title, description, listItems, videoSrc }) {
  return (
    <section className="videos-section">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="videos-container">
        
        {/* TEXTO */}
        <div className="videos-text">
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* VIDEO LOCAL */}
        <div className="videos-frame">
          <video controls className="video-player">
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta video.
          </video>
        </div>

      </div>
    </section>
  );
}

export default Videos;