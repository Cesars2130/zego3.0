import React from "react";
import { Grid } from "@mui/material";

import "../Moleculas/moleculas.css";

export default function Cards({ aux }) {
  return (
    <Grid item xs={12}>
      <Grid container spacing={0}>
        {aux.map((card) => (
          <>
            <Grid item xs={12} lg={6} className={card.orderStyle1}>
              <div className={card.styleCard}>
                <div className="contenidoCard">
                  <h1
                    style={{
                      color: "white",
                      fontSize: "65px",
                    }}
                  >
                    {card.tituloCard}
                  </h1>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} lg={6} className={card.orderStyle2}>
              <div className="contenidoCardNoImg">
                <div className="contCardNo">
                  <h3>{card.contenidoCard}</h3>
                </div>
              </div>
            </Grid>
          </>
        ))}
      </Grid>
    </Grid>
  );
}
