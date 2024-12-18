"use client";
import React, { useEffect, useState } from "react";
import "../../../css/globals.css";
import "../Organismos/organismos.css";
import "../../../public/download-solid.svg";
import Image from "next/image";
import {
  Button,
  styled,
  Stack,
  Grid,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import axios from "axios";

export default function Reportes() {
  const [empresa, setEmpresa] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fechaValue, setFechaValue] = useState([]);
  const fecha = [
    "21/09/2023",
    "30/10/2024",
    "31/04/2024",
    "21/09/2023",
    "30/10/2024",
    "31/04/2024",
    "21/09/2023",
    "30/10/2024",
    "31/04/2024",
  ]; // aquí se van a consumir las fechas

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/empresaSeleccionada"
        );
        const data = response.data;
        setEmpresa(data.nombre_cliente);
        setDireccion(data.direccion);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="containerClientesReportes">
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "5px",
            }}
          >
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              xs={12}
              style={{
                margin: 0,
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  margin: "0px",
                }}
              >
                {empresa || "Nombre Empresa"}
              </h1>
            </Grid>
            <Grid item display={"flex"} justifyContent={"center"} xs={12}>
              <h2
                style={{
                  textAlign: "center",
                  margin: "0px",
                  marginBottom: "15px",
                }}
              >
                {direccion || "Dirección Empresa"}
              </h2>
            </Grid>

            <Grid
              item
              xs={12}
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="cardReporte">
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={6} lg={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "50%",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Licencia Sanitaria
                      </h1>
                    </div>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <Box sx={{ width: "100%" }}>
                      <Autocomplete
                        disablePortal
                        id="fecha"
                        options={fecha}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        onChange={(e, value) => {
                          console.log(value);
                          setFechaValue(
                            "fecha",
                            value !== null ? value : values.fecha
                          );
                          // aca haremos los cambios de renderizacion de cards por region
                        }}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Fecha" />
                        )}
                      ></Autocomplete>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Grid container spacing={0} direction={"row"}>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="agregar"
                          className="add"
                          onClick={() => {
                            window.location.href = "./agregarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="add"
                          onClick={() => {
                            window.location.href = "./editarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="cardReporte">
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={6} lg={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "50%",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Orden De Servicio
                      </h1>
                    </div>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <Box sx={{ width: "100%" }}>
                      <Autocomplete
                        disablePortal
                        id="fecha"
                        options={fecha}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        onChange={(e, value) => {
                          console.log(value);
                          setFechaValue(
                            "fecha",
                            value !== null ? value : values.fecha
                          );
                          // aca haremos los cambios de renderizacion de cards por region
                        }}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Fecha" />
                        )}
                      ></Autocomplete>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Grid container spacing={0} direction={"row"}>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="agregar"
                          className="add"
                          onClick={() => {
                            window.location.href = "./agregarOrdenDeServicio";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="download"
                          onClick={() => {
                            window.location.href = "./editarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="add"
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="cardReporte">
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={6} lg={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "50%",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Reporte De Inspeccion a Nivel Piso
                      </h1>
                    </div>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <Box sx={{ width: "100%" }}>
                      <Autocomplete
                        disablePortal
                        id="fecha"
                        options={fecha}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        onChange={(e, value) => {
                          console.log(value);
                          setFechaValue(
                            "fecha",
                            value !== null ? value : values.fecha
                          );
                          // aca haremos los cambios de renderizacion de cards por region
                        }}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Fecha" />
                        )}
                      ></Autocomplete>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Grid container spacing={0} direction={"row"}>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="agregar"
                          className="add"
                          onClick={() => {
                            window.location.href =
                              "./agregarReporteInspeccionPiso";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="add"
                          onClick={() => {
                            window.location.href =
                              "./editarReporteInspeccionPiso";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="cardReporte">
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={6} lg={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "50%",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Reporte De Inspeccion a Nivel Equipo
                      </h1>
                    </div>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <Box sx={{ width: "100%" }}>
                      <Autocomplete
                        disablePortal
                        id="fecha"
                        options={fecha}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        onChange={(e, value) => {
                          console.log(value);
                          setFechaValue(
                            "fecha",
                            value !== null ? value : values.fecha
                          );
                          // aca haremos los cambios de renderizacion de cards por region
                        }}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Fecha" />
                        )}
                      ></Autocomplete>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Grid container spacing={0} direction={"row"}>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="agregar"
                          className="add"
                          onClick={() => {
                            window.location.href =
                              "./agregarReporteInspeccionEquipo";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="add"
                          onClick={() => {
                            window.location.href =
                              "./editarReporteInspeccionEquipo";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <Image
                          width={100}
                          height={100}
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="cardReporte">
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={12} lg={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "50%",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Registro De quimicos
                      </h1>
                    </div>
                  </Grid>

                  <Grid item xs={12} lg={8}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        alt="imagen"
                        className="download"
                        onClick={() => {
                          window.open(
                            "https://res.cloudinary.com/dclm8x0pj/image/upload/v1726269722/Registro_Quimicos_-_Hoja_1_rpjpdu.pdf",
                            "_blank"
                          );
                        }}
                        style={{ cursor: "pointer" }} // Añadir un estilo opcional para indicar que es clickeable
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
