import React from "react";
import CardNotification from "../Moleculas/CardNotification";

export default function historial() {
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
          <h2>Historial</h2>

          <div className="contact-info">
            <CardNotification/> 
            <CardNotification/> 
            <CardNotification/> 
            <CardNotification/> 
            <CardNotification/> 
            <CardNotification/> 
            <CardNotification/> 
            <CardNotification/> 
            <CardNotification/> 
            <CardNotification/> 
            <CardNotification/> 
            <CardNotification/> 
            <CardNotification/> 

          </div>
        </div>
      </div>
    </>
  );
}
