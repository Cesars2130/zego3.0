import React from "react";
import Banner from "../Organismos/Banner";
import Cards from "../Moleculas/Cards";
import { Grid } from "@mui/material";
import Image from "next/image";

export default function Servicios() {
  const CardsA = [
    {
      tituloCard: "Fumigaciones",
      contenidoCard:
        "Las fumigaciones son un servicio vital en la protección y mantenimiento de hogares, negocios y espacios públicos contra plagas de insectos, roedores y otros organismos no deseados. Una empresa de fumigaciones se especializa en la aplicación controlada de pesticidas y otros agentes químicos para eliminar y prevenir la proliferación de plagas, lo que ayuda a salvaguardar la salud pública, proteger la propiedad y preservar el medio ambiente.",
      styleCard: "Card1",
      orderStyle1: "orderStyleL1",
      orderStyle2: "orderStyleL2",
    },
    {
      tituloCard: "Control De Plagas",
      contenidoCard:
        "El control de plagas es un servicio esencial para mantener la salud y la seguridad en hogares, negocios y entornos públicos alrededor del mundo. Una empresa de control de plagas se especializa en la identificación, prevención y eliminación de infestaciones de insectos, roedores, aves y otros organismos perjudiciales que pueden representar una amenaza para la salud humana, la propiedad y el medio ambiente.",
      styleCard: "Card1",
      orderStyle1: "orderStyleR1",
      orderStyle2: "orderStyleR2",
    },
  ];

  const CardsB = [
    {
      tituloCard: "Productos y Personal de Limpieza",
      contenidoCard:
        "Zego cuenta con una selección de productos de limpieza especializados diseñados para complementar sus servicios de control de plagas y fumigaciones. Esto incluiría desinfectantes, detergentes, desodorantes y otros productos químicos para limpiar y desinfectar áreas afectadas por plagas, así como para prevenir futuras infestaciones.",
      styleCard: "Card1",
      orderStyle1: "orderStyleR1",
      orderStyle2: "orderStyleR2",
    },
  ];

  return (
    <>
      <Banner />

      <div className="serviciosFirst">
        <h1 className="servicios2">Servicios </h1>
      </div>

      <Grid
        container
        spacing={0}
        style={{
          marginBottom: "40px",
        }}
      >
        <div className="CardsContainer">
          <Cards aux={CardsA} />
          <Cards aux={CardsB} />
        </div>
      </Grid>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "75%",
            justifyContent: "center",
            boxShadow: "-5px 6px 32px -3px rgba(0, 0, 0, 0.2)",
            borderColor: "#65717d",
            borderRadius: "2px",
          }}
        >
          <Grid
            container
            spacing={2}
            direction={"row"}
            style={{
              margin: "20px",
            }}
          >
            <Grid item xs={12} lg={4}>
              <div className="servicio1"></div>
            </Grid>
            <Grid item xs={12} lg={4}>
              <div className="servicio1"></div>
            </Grid>
            <Grid item xs={12} lg={4}>
              <div className="servicio1"></div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
