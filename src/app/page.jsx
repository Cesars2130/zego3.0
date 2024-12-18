import React from "react";
import "../../css/globals.css";
import Cards from "./Moleculas/Cards";
import Banner from "./Organismos/Banner";
import { Grid } from "@mui/material";


export default function Home() {
  const CardsA = [
    {
      tituloCard: "Mision",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
      orderStyle1:"orderStyleL1",
      orderStyle2:"orderStyleL2"
    },
   {
      tituloCard: "Vision",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
      orderStyle1:"orderStyleR1",
      orderStyle2:"orderStyleR2"
    },
    
  ];

  const CardsB = [
    {
      tituloCard: "Valores",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
      orderStyle1:"orderStyleR1",
      orderStyle2:"orderStyleR2"
    },

    
  ];
  return (
    <>
      <Banner />
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
    </> 
  );
}
