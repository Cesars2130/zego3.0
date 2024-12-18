import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../../../css/globals.css"

export default function Contactanos() {
  return (
      <div className="contact-container">
          <div className="contact-info">
              <h2>Contactanos</h2>
              <p>¡Estamos aquí para ayudarte! Ponte en contacto con nosotros para cualquier pregunta o consulta.</p>
              <ul>
                  <li><FaPhoneAlt />    961 166 8112</li>
                  <li><FaEnvelope /> ZegoFumigaciones@Gmail.com</li>
                  <li><FaMapMarkerAlt /> Av. 14 Nte. Ote. 195, La Pimienta, 29034 Tuxtla Gutiérrez, Chis.</li>
              </ul>
          </div>
          <div className="contact-form">
              <h2>Envíanos un mensaje</h2>
              <form>
                  <input type="text" placeholder="Nombre" />
                  <input type="email" placeholder="Correo Electrónico" />
                  <textarea placeholder="Mensaje"></textarea>
                  <button type="submit">Enviar Mensaje</button>
              </form>
          </div>
      </div>
  );
}
