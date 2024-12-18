"use client";
import React from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  styled,
  Stack,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Autocomplete,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import "../../../css/globals.css";

export default function EditarEmpleado() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const region = ["Todas", "Tuxtla", "Comitan", "Comalapa"]; //aqui se van a consumir las regiones que dejemos por default
  const giroDeEmpresa = ["Cadena", "Farmacias", "Carnicerias", "Gobierno"]; //aqui se van a consumir los tipos de empresasa que dejemos

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const [name, setName] = useState("");
  const [nameSucursal, setNameSucursal] = useState("");
  const [password, setPassword] = useState("");
  const [direccionSucursal, setDireccionSucural] = useState("");
  const [mail, setMail] = useState("");

  const [regionValue, setRegionValue] = useState([]);
  const [giroDeEmpresaValue, setgiroDeEmpresaValue] = useState([]);

  const handlegiroDeEmpresa = (event, value) => {
    if (value) {
      setgiroDeEmpresaValue(value);
    } else {
      setgiroDeEmpresaValue("");
    }
  };
  const handleregionValue = (event, value) => {
    if (value) {
      setRegionValue(value);
    } else {
      setRegionValue("");
    }
  };

  const handleSubmit = async () => {
    try {
      console.log(values);
      //token
      axios
        .post("http://localhost:8080/", {
          name: values.name,
          nameSucursal: values.nameSucursal,
          mail: values.mail,
          password: values.password,
          direccionSucursal: values.direccionSucursal,
          giroDeEmpresa: values.giroDeEmpresa,
          region: values.region,
          token: token, //token
        })
        .then((response) => {
          console.log(response);
          alert("Cliente Creado");
          window.location.href = "http://localhost:3000/Empleados";
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          className="containerAgregarClientesFondo"
          style={{
            justifyContent: "center",
          }}
        >
          <Grid container direction={"row"}>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              textAlign={"center"}
              style={{
                margin:"0px"
              }}
            >
              <h1 style={{
                margin:"0px"
              }}>EDITAR EMPLEADO </h1>
            </Grid>
            <Grid item xs={12}  >
              <Grid container direction={"row"} spacing={2}>
                <Grid item xs={12} lg={1}></Grid>
                <Grid item xs={12} lg={5}>
                  <TextField
                    fullWidth
                    placeholder="Nombre Del Empleado"
                    id="name"
                    multiline
                    required
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    value={name}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#F7F7F9",
                      opacity: "75%",
                    }}
                  ></TextField>
                </Grid>
                <Grid item xs={12} lg={5}>
                  <TextField
                    fullWidth
                    placeholder="Correo del Cliente"
                    id="mail"
                    multiline
                    required
                    value={mail}
                    onChange={(event) => {
                      setMail(event.target.value);
                    }}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#F7F7F9",
                      opacity: "75%",
                    }}
                  ></TextField>
                </Grid>
                <Grid item xs={12} lg={1}></Grid>
                <Grid item xs={12} lg={1}></Grid>
                <Grid item xs={12} lg={5}>
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    fullWidth
                    id="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <InputLabel style={{ fontSize: 12 }}>Contraseña</InputLabel>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                >
                  <input
                    id="radio-2"
                    class="radio-custom"
                    name="radio-group"
                    type="radio"
                  />
                  <label for="radio-2" class="radio-custom-label">
                    Administrador
                  </label>
                  <input
                    id="radio-2"
                    class="radio-custom"
                    name="radio-group"
                    type="radio"
                  />
                  <label for="radio-2" class="radio-custom-label">
                    Supervisor
                  </label>
                  <input
                    id="radio-2"
                    class="radio-custom"
                    name="radio-group"
                    type="radio"
                  />
                  <label for="radio-2" class="radio-custom-label">
                    Cliente
                  </label>
                </Grid>
                <Grid item xs={12} lg={1}></Grid>
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
          </Grid>
        </form>
      </div>
    </>
  );
}
