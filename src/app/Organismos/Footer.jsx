"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <AppBar position="static" style={{ background: "#10754A" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginTop: "15px",
                  alignContent: "flex-start",
                }}
              >
                <Grid container direction={"column"} spacing={0}>
               

                  <Grid item>
                    <Grid container direction={"row"} spacing={0}>
                   
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12} lg={4}>
              <div
                style={{
                  textAlign: "center",
                  marginTop:"5px",
                  
                }}
              >
                <h2 className="titulo">ZEGO S.A DE C.V</h2>
              </div>
            </Grid>

            <Grid item xs={12} lg={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Grid
                  container
                  direction={"column"}
                  spacing={0}
                  style={{
                    alignItems: "flex-end",
                    alignContent: "flex-end",
                  }}
                >
                  <Grid item xs={6} lg={6}>
                    <Grid
                      container
                      direction={"row"}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                   
                    </Grid>
                  </Grid>

                  <Grid item xs={6} lg={6}>
                    <Grid
                      container
                      direction={"row"}
                      style={{
                        display: "flex",
                      }}
                    >
                     
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

{
  /* <div
style={{
  backgroundColor: "#313931",
  color: "white",
}}
>
<Grid container spacing={0}>
  <Grid item xs={12} lg={4}>
    <Grid container direction={"column"} spacing={0}>
      <Grid item>
        <h2
          style={{
            fontSize: "30px",
          }}
        >
          Contactanos
        </h2>
      </Grid>

      <Grid item>
        <Grid container direction={"row"} spacing={0}>
          <LocalPhoneIcon
            sx={{
              fontSize: "50px",
            }}
          ></LocalPhoneIcon>

          <h2>+52 96116681124</h2>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  <Grid item xs={12} lg={4}>
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>ZEGO S.A DE C.V</h2>
    </div>
  </Grid>

  <Grid item xs={12} lg={4}>
    <Grid container direction={"column"} spacing={0} >
      <Grid item >
        <Grid container direction={"row"} style={{
          display:"flex",
          alignItems:"center"
        }} >
          <FacebookIcon></FacebookIcon>
          <h2>Zego Fumigaciones</h2>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction={"row"} style={{
          display:"flex",
          alignItems:"center"
        }}>
          <Email></Email>
          <h2>ZegoFumigaciones@Gmail.com</h2>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>
</div> */
}
