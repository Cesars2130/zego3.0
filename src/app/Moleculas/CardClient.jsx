import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';

export default function Cardclient({ cliente }) {
  const handleCardClick = async () => {
    try {
      // Enviar una solicitud a la API para seleccionar la empresa
      await axios.post('http://localhost:8000/api/seleccionarEmpresa', {
        id: cliente.id,
        nombre_cliente: cliente.nombre_cliente,
        nombre_sucursal: cliente.nombre_sucursal,
        direccion: cliente.direccion
      });

      // Después de que la empresa ha sido seleccionada, redirigir a la página de reportes
      window.location.href = "/reportes";
    } catch (error) {
      console.error('Hubo un problema al seleccionar la empresa:', error);
    }
  };

  const handleUpdate = (event) => {
    event.stopPropagation(); // Prevenir la redirección al hacer clic en el botón de editar
    window.location.href = `./editarCliente?id=${cliente.id}&nombre_cliente=${encodeURIComponent(cliente.nombre_cliente)}&nombre_sucursal=${encodeURIComponent(cliente.nombre_sucursal)}&direccion=${encodeURIComponent(cliente.direccion)}&email=${encodeURIComponent(cliente.email)}`;
  };
  

  const handleDelete = (event) => {
    event.stopPropagation(); // Prevenir la redirección al hacer clic en el botón de eliminar
    axios.delete(`http://localhost:8000/api/clientes/${cliente.id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Hubo un problema al eliminar el cliente:', error);
      });
  };

  return (
    <>
      <Paper
        onClick={handleCardClick} // Añadir el manejador de clic en el contenedor principal
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          cursor: "pointer" // Cambiar el cursor para indicar que es clicable
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <Typography gutterBottom fontSize={30}>
                  {cliente.nombre_cliente}
                </Typography>
                <Typography variant="body2" fontSize={15} marginBottom={2}>
                  {cliente.nombre_sucursal}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {cliente.direccion}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction={"row"} spacing={2}>
                  <Grid item xs={6}>
                    <Button variant="body2" onClick={handleUpdate}>
                      Editar
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="body2" onClick={handleDelete}>
                      Eliminar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
