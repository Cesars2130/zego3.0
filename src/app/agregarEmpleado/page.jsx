"use client";
import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  Stack,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Input,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

export default function AgregarEmpleado() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState(""); // Estado para almacenar el rol seleccionado

  const handleSubmit = async () => {
    try {
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const contraseña = document.getElementById("contraseña").value;

      // Enviar datos al backend
      await axios.post("http://127.0.0.1:8000/api/register", {
        nombre_empleado: nombre,
        correo,
        contraseña,
        rol: selectedRole,
      });
      

      // Si la solicitud se completa correctamente, puedes redirigir o mostrar un mensaje de éxito
      alert("Empleado agregado correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value); // Actualiza el rol seleccionado cuando cambia la selección del usuario
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", height:"100%", minHeight:"560px" }}>
        <form className="containerAgregarClientesFondo" style={{ width: "100%", height:"100%"}}>
          <Grid container direction={"row"} spacing={2}>
            <Grid item xs={12} textAlign={"center"}>
              <h1>AGREGA UN EMPLEADO</h1>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                placeholder="Nombre del Empleado"
                id="nombre"
                required
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
                placeholder="Correo del Empleado"
                id="correo"
                required
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#F7F7F9",
                  opacity: "75%",
                }}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <FormControl fullWidth variant="outlined" required>
                <InputLabel htmlFor="contraseña">Contraseña</InputLabel>
                <OutlinedInput
                  id="contraseña"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Contraseña"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} lg={6}>
              <FormControl fullWidth required>
                <InputLabel id="role-label">Rol</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  value={selectedRole}
                  onChange={handleRoleChange}
                  label="Rol"
                >
                  <MenuItem value="admin">Administrador</MenuItem>
                  <MenuItem value="supervisor">Supervisor</MenuItem>
                  <MenuItem value="cliente">Cliente</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Box>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    fullWidth
                    style={{
                      color: "white",
                      backgroundColor: "#10754a",
                      "&:hover": {
                        backgroundColor: "#D6D6D6",
                      },
                    }}
                    onClick={handleSubmit}
                  >
                    AGREGAR
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}
