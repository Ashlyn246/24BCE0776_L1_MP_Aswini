import React from "react";
import "./Contact.css";

function Contact_24BCE0776_Aswini() {
  return (
    <div className="container">
      <h2>Contact Us</h2>

      <p>📞 9876543210</p>
      <p>📍 Paradise Restaurant</p>
      <p>📌 Location: 12.9679, 79.1556</p>

      <iframe
        title="map"
        src="https://www.google.com/maps?q=12.967922659583504,79.155626736319&output=embed"
        width="100%"
        height="300"
        style={{ border: 0, marginTop: "10px" }}
        loading="lazy"
      ></iframe>

      <a
        href="https://www.google.com/maps/dir/?api=1&destination=12.967922659583504,79.155626736319"
        target="_blank"
        rel="noreferrer"
      >
        <button>Get Directions</button>
      </a>
    </div>
  );
}

export default Contact_24BCE0776_Aswini;