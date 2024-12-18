"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "@mui/material/Button";
import Enlaces from "../Atomos/Enlaces";

const pages = {
  admin: [
    { nombrePage: "Inicio", href: "/" },
    { nombrePage: "Clientes", href: "/clientes" },
    { nombrePage: "Reportes", href: "/reportes" },
    { nombrePage: "Descargar", href: "/reportesdescarga" },
    { nombrePage: "Graficas", href: "/Graficas" },
    { nombrePage: "Agregar Empleado", href: "/agregarEmpleado" },
    { nombrePage: "Editar Empleado", href: "/agregarEmpleado" },
    { nombrePage: "Historial", href: "/historial" },
  ],
  supervisor: [
    { nombrePage: "Inicio", href: "/" },
    { nombrePage: "Galeria", href: "/galeria" },
    { nombrePage: "Servicios", href: "/servicios" },
    { nombrePage: "Contactanos", href: "/contactanos" },
    { nombrePage: "Reportes", href: "/reportes" },
    { nombrePage: "Descargar", href: "/reportesdescarga" },
  ],
  cliente: [
    { nombrePage: "Inicio", href: "/" },
    { nombrePage: "Galeria", href: "/galeria" },
    { nombrePage: "Servicios", href: "/servicios" },
    { nombrePage: "Contactanos", href: "/contactanos" },
    { nombrePage: "Descargar", href: "/reportesdescarga" },
  ],
  default: [
    { nombrePage: "Inicio", href: "/" },
    { nombrePage: "Galeria", href: "/galeria" },
    { nombrePage: "Servicios", href: "/servicios" },
    { nombrePage: "Contactanos", href: "/contactanos" },
    { nombrePage: "Iniciar Sesion", href: "/Login" },
  ],
};

function Nav() {
  const [navPages, setNavPages] = useState(pages.default);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/auth", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        console.log(data); // Verifica la estructura de datos aquí

        if (data && data.rol) {
          setUserName(data.nombre_empleado);
          setNavPages(pages[data.rol] || pages.default);
        } else {
          setNavPages(pages.default);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setNavPages(pages.default);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      localStorage.removeItem("token");
      setNavPages(pages.default);
      setUserName(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <AppBar position="static" style={{ background: "#10754A" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={1}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <AdbIcon sx={{ display: { md: "flex" }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                  }}
                >
                  ZEGO
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} lg={8}>
              <Grid container spacing={2} className="nav">
                {navPages.map((page) => (
                  <Enlaces key={page.nombrePage} {...page} />
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} lg={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                {userName && (
                  <>
                    <Typography variant="body1" style={{ marginRight: "10px" }}>
                      {userName}
                    </Typography>
                    <Button color="inherit" onClick={handleLogout}>
                      Cerrar Sesión
                    </Button>
                  </>
                )}
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
