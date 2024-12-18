import React from 'react';
import "../Organismos/organismos.css";



export default function Banner() {
  return (
    <section
    class="Hero"
    style={{
      marginBottom: "40px",
    }}
  >
    <div class="Contenido-Hero">
      <h1 style={{
        color:"white",
        fontSize:"65px"
      }}>ZEGO</h1>
      <span>Fumigaciones Profesionales</span>
      <div class="Ubicacion">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-map"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7" />
            <line x1="9" y1="4" x2="9" y2="17" />
            <line x1="15" y1="7" x2="15" y2="20" />
          </svg>
          Av. 14 Nte. Ote. 195, La Pimienta, 29034 Tuxtla Gutiérrez, Chis.
        </p>
      </div>
    </div>
  </section>
  )
}
