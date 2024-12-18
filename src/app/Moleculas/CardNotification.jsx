import React from "react";
import "../Moleculas/moleculas.css";

export default function CardNotification() {
  return (
    <>
      <div className="cardNoti">
        <div className="dateNoti">
          <p>
            21/08/2024
          </p>
        </div>
        <div className="idNoti">
          <p>
            Supervisor
          </p>
        </div>
        <div className="contNoti">
          <p>
            ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros para
            cualquier pregunta o consulta.
          </p>
        </div>
      </div>
    </>
  );
}
