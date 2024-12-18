"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Importar el hook adecuado para parámetros de consulta
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
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";

export default function EditarCliente() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const nombre_cliente = searchParams.get("nombre_cliente");
  const nombre_sucursal = searchParams.get("nombre_sucursal");
  const direccion = searchParams.get("direccion");
  const email = searchParams.get("email");

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [nameSucursal, setNameSucursal] = useState("");
  const [password, setPassword] = useState("");
  const [direccionSucursal, setDireccionSucursal] = useState("");
  const [mail, setMail] = useState("");
  const [regionValue, setRegionValue] = useState([]);
  const [giroDeEmpresaValue, setGiroDeEmpresaValue] = useState([]);
  const [colonia, setColonia] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");

  useEffect(() => {
    if (nombre_cliente) setName(nombre_cliente);
    if (nombre_sucursal) setNameSucursal(nombre_sucursal);
    if (direccion) setDireccionSucursal(direccion);
    if (email) setMail(email);
  }, [nombre_cliente, nombre_sucursal, direccion, email]);

  const handleGiroDeEmpresa = (event, value) => {
    setGiroDeEmpresaValue(value || []);
  };

  const handleRegionValue = (event, value) => {
    setRegionValue(value || []);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8000/api/clientes/${id}`,
        {
          nombre_cliente: name,
          nombre_sucursal: nameSucursal,
          region: regionValue,
          giro_empresa: giroDeEmpresaValue,
          correo_cliente: mail,
          contraseña: password,
          // Incluye solo los campos que deseas actualizar
        }
      );

      console.log(response.data);
      alert("Cliente Actualizado");
      window.location.href = "http://localhost:8000/clientes";
    } catch (error) {
      console.error(
        "Error al actualizar cliente:",
        error.response?.data || error.message
      );
      // Mostrar el error en la interfaz de usuario para depuración
      alert(
        `Error al actualizar cliente: ${
          error.response?.data.detail || error.message
        }`
      );
    }
  };

  const region = ["Todas", "Tuxtla", "Comitan", "Comalapa"];
  const giroDeEmpresa = ["Cadena", "Farmacias", "Carnicerias", "Gobierno"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
            <h1>EDITAR CLIENTE</h1>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction={"row"} spacing={2}>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  placeholder="Nombre Del Cliente"
                  id="name"
                  multiline
                  required
                  onChange={(event) => setName(event.target.value)}
                  value={name}
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
                  id="nameSucursal"
                  multiline
                  required
                  value={nameSucursal}
                  onChange={(event) => setNameSucursal(event.target.value)}
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
                  id="direccionSucursal"
                  multiline
                  required
                  value={direccionSucursal}
                  onChange={(event) => setDireccionSucursal(event.target.value)}
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
                  value={colonia}
                  onChange={(e) => setColonia(e.target.value)}
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
                  value={codigoPostal}
                  onChange={(e) => setCodigoPostal(e.target.value)}
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
                    getOptionLabel={(option) =>
                      typeof option === "string" || option instanceof String
                        ? option
                        : ""
                    }
                    onChange={handleRegionValue}
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
                    id="Giro De Empresa"
                    options={giroDeEmpresa}
                    getOptionLabel={(option) =>
                      typeof option === "string" || option instanceof String
                        ? option
                        : ""
                    }
                    required
                    onChange={handleGiroDeEmpresa}
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
                  id="mail"
                  multiline
                  required
                  value={mail}
                  onChange={(event) => setMail(event.target.value)}
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#F7F7F9",
                    opacity: "75%",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  fullWidth
                  id="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <InputLabel style={{ fontSize: 12 }}>Contraseña</InputLabel>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}></Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <Stack spacing={2} direction="row">
                <ColorButton type="submit" variant="contained" fullWidth>
                  ACTUALIZAR
                </ColorButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
