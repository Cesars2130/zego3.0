"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  TextField,
  Button,
  Box,
  styled,
  Stack,
  InputAdornment,
  IconButton,
  Autocomplete,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Formik } from "formik";

export default function AgregarCliente() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const region = ["Todas", "Tuxtla", "Comitan", "Comalapa"];
  const giroDeEmpresa = ["Cadena", "Farmacias", "Carnicerias", "Gobierno"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Formik
        initialValues={{
          nombre_cliente: "",
          nombre_sucursal: "",
          correo_cliente: "",
          contraseña: "",
          direccion: "",
          region: "",
          giro_empresa: ""
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await axios.post(
              "http://127.0.0.1:8000/api/clientes", // Verifica esta URL
              values
            );
            console.log(response.data);
            alert("Cliente Creado");
            resetForm();
          } catch (error) {
            console.error(error);
            alert("Error al crear el cliente");
          }
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <form
            className="containerAgregarClientesFondo"
            style={{ justifyContent: "center" }}
            onSubmit={handleSubmit}
          >
            <Grid container direction={"row"}>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                textAlign={"center"}
              >
                <h1>AGREGA UN CLIENTE</h1>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction={"row"} spacing={2}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      placeholder="Nombre Del Cliente"
                      id="nombre_cliente"
                      multiline
                      required
                      value={values.nombre_cliente}
                      onChange={handleChange}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F9",
                        opacity: "75%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      placeholder="Nombre De la Sucursal"
                      id="nombre_sucursal"
                      multiline
                      required
                      value={values.nombre_sucursal}
                      onChange={handleChange}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F9",
                        opacity: "75%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      placeholder="Direccion"
                      id="direccion"
                      multiline
                      required
                      value={values.direccion}
                      onChange={handleChange}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F9",
                        opacity: "75%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      placeholder="Colonia"
                      id="colonia"
                      multiline
                      required
                      value={values.colonia}
                      onChange={handleChange}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F9",
                        opacity: "75%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      placeholder="Codigo Postal"
                      id="codigoPostal"
                      multiline
                      required
                      value={values.codigoPostal}
                      onChange={handleChange}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F9",
                        opacity: "75%",
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Box sx={{ width: "100%" }}>
                      <Autocomplete
                        disablePortal
                        id="region"
                        options={region}
                        getOptionLabel={(option) => option}
                        onChange={(event, value) => {
                          setFieldValue("region", value || "");
                        }}
                        value={values.region}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Region" />
                        )}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Box sx={{ width: "100%" }}>
                      <Autocomplete
                        disablePortal
                        id="giro_empresa"
                        options={giroDeEmpresa}
                        getOptionLabel={(option) => option}
                        onChange={(event, value) => {
                          setFieldValue("giro_empresa", value || "");
                        }}
                        value={values.giro_empresa}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Giro De Empresa" />
                        )}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      placeholder="Correo del Cliente"
                      id="correo_cliente"
                      multiline
                      required
                      value={values.correo_cliente}
                      onChange={handleChange}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F9",
                        opacity: "75%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      placeholder="Contraseña"
                      id="contraseña"
                      required
                      value={values.contraseña}
                      onChange={handleChange}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F9",
                        opacity: "75%",
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3}></Grid>
            <Grid item xs={12} lg={6}>
              <Box>
                <Stack spacing={2} direction="row">
                  <ColorButton type="submit" variant="contained" fullWidth>
                    AGREGAR
                  </ColorButton>
                </Stack>
              </Box>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
}
