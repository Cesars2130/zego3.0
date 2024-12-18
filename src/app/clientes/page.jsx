"use client";
import React, { useState, useEffect } from "react";
import "../../../css/globals.css";
import Cardclient from "../Moleculas/CardClient";
import { Button, Grid, Box, Autocomplete, TextField, styled, Stack } from "@mui/material";
import axios from "axios";

export default function Clientes() {
  const [region, setRegion] = useState([]);
  const [giroDeEmpresa, setGiroDeEmpresa] = useState([]);
  const [nombreDeEmpresa, setNombreDeEmpresa] = useState([]);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Cargar regiones
    axios.get("http://localhost:8000/api/clientes")
      .then(response => {
        // Supongamos que tienes una ruta para obtener regiones, así que ajusta según tu API
        setRegion(response.data.map(cliente => cliente.region));
        setGiroDeEmpresa(response.data.map(cliente => cliente.giro_empresa));
        setNombreDeEmpresa(response.data.map(cliente => cliente.nombre_cliente));
        setClientes(response.data);
      })
      .catch(error => console.error("Error al cargar clientes:", error));
  }, []);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));

  const handleAgregarCliente = () => {
    window.location.href = "./agregarCliente";
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="containerClientesFondo">
          <Grid
            container
            direction="row"
            justifyContent={"center"}
            alignContent={"flex-start"}
          >
            <Grid item xs={12} lg={12} display="flex" justifyContent={"center"}>
              <h1>Clientes</h1>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              sx={{
                marginBottom: "20px",
              }}
            >
              <Grid container spacing={2} direction={"row"}>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  display="flex"
                  justifyContent={"center"}
                >
                  <Box sx={{ width: "100%" }}>
                    <Autocomplete
                      disablePortal
                      id="region"
                      options={region}
                      getOptionLabel={(option) => option || ""}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Region" />
                      )}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  display="flex"
                  justifyContent={"center"}
                >
                  <Box sx={{ width: "100%" }}>
                    <Autocomplete
                      disablePortal
                      id="giroDeEmpresa"
                      options={giroDeEmpresa}
                      getOptionLabel={(option) => option || ""}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Giro De Empresa" />
                      )}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  display="flex"
                  justifyContent={"center"}
                >
                  <Box sx={{ width: "100%" }}>
                    <Autocomplete
                      disablePortal
                      id="nombreDeEmpresa"
                      options={nombreDeEmpresa}
                      getOptionLabel={(option) => option || ""}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Buscador" />
                      )}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction={"row"} spacing={2}>
                {clientes.map((cliente) => (
                  <Grid item xs={12} lg={4} key={cliente.id}>
                    <div>
                      <Cardclient cliente={cliente} />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="clientes-herramientas">
        <Stack spacing={2} direction="row">
          <ColorButton
            variant="contained"
            fullWidth
            onClick={handleAgregarCliente}
          >
            AGREGAR
          </ColorButton>
        </Stack>
      </div>
    </>
  );
}
