import React from "react";
import Image from "next/image";
export default function Galeria() {
  const imagenes = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg",
    "/7.jpeg",
    "/8.jpeg",
    "/9.jpeg",
    "/10.jpeg",
    "/11.jpeg",
    "/12.jpeg",
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Galería</h1>
      <div className="gallery-grid">
        {imagenes.map((imagen, index) => (
          <div className="gallery-item" key={index}>
            <Image
              width={100}
              height={100}
              src={imagen}
              alt={`Imagen ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
