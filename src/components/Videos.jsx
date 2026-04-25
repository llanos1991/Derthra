import React from "react";
import "../styles/Videos.css";

function Videos({ title, description, listItems, videoUrl }) {
  return (
    <section className="videos-section">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="videos-container">
        <div className="videos-text">
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="videos-frame">
          <iframe
            src={videoUrl}
            title={title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Videos;