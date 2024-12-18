"use client";
import React from "react";
import CardProxLicencia from "../Moleculas/CardProxLicencia";

export default function ProximasLicencias() {


  return (
    <>
      <div
        style={{
          width: "80%",
          margin: "auto",
          textAlign: "center",
          minHeight: "550px",
        }}
      >
        <div className="contact-container">
          <h2>Próximas Licencias</h2>

          <div className="contact-info">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "row",
                gap: "50px",
              }}
            >
              <div>
                <h3>Prioridad</h3>
              </div>
              <div>
                <h3>Próxima Visita</h3>
              </div>
              <div>
                <h3>Cliente</h3>
              </div>
            </div>
            <CardProxLicencia />
          </div>
        </div>
      </div>
    </>
  );
}
