"use client";
import React, { useState } from "react";
import "../../../css/globals.css";
import CardEmployee from "../Moleculas/CardEmployee";
import {
  Button,
  Grid,
  Box,
  Autocomplete,
  TextField,
  styled,
  Stack,
} from "@mui/material";

export default function Clientes() {
  const region = ["Todas", "Tuxtla", "Comitan", "Comalapa"]; //aqui se van a consumir las regiones que dejemos por default
  const giroDeEmpresa = ["Cadena", "Farmacias", "Carnicerias", "Gobierno"]; //aqui se van a consumir los tipos de empresasa que dejemos
  const nombreDeEmpresa = ["CocaCola", "Farmacia Santa Cruz", "Carniceria"];

  const [regionValue, setRegionValue] = useState([]);
  const [giroDeEmpresaValue, setgiroDeEmpresaValue] = useState([]);
  const [nombreDeEmpresaValue, setNombreDeEmpresaValue] = useState([]);

  //ejemplo de arreglo para consumir clientes
  const clientes = [
    {
      id: 1,
      name: "Jorge Luis",
      role: "Supervisor",
      mail: "jluis@gmail.com",
    },
    {
      id: 2,
      name: "Javier Alejandro",
      role: "Secretaria/o",
      mail: "javier.alejandro.21@gmail.com ",
    },
    {
      id: 3,
      name: "David De La Cruz",
      role: "Administrador",
      mail: "daviddelacruzmorales42@gmail.com  ",
    },
  ];

  //Use effect para renderizado condicional

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
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
        <div className="containerClientesFondo">
          <Grid
            container
            direction="row"
            justifyContent={"center"}
            alignContent={"flex-start"}
          >
            <Grid item xs={12} lg={12} display="flex" justifyContent={"center"}>
              <h1>Empleados</h1>
            </Grid>

            <Grid item xs={12}>
              <Grid container direction={"row"} spacing={2}>
                {clientes.map((cliente) => {
                  console.log(cliente);
                  return (
                    <Grid item xs={12} lg={4} key={cliente.id}>
                      <div>
                        <CardEmployee c={cliente} />
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="clientes-herramientas">
        <Stack spacing={2} direction="row">
          <ColorButton
            type="submit"
            variant="contained"
            fullWidth
            onClick={() => {
              window.location.href = "./agregarEmpleado";
            }}
          >
            AGREGAR
          </ColorButton>
        </Stack>
      </div>
    </>
  );
}
