"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { TextField, Button, Grid, styled, Stack } from "@mui/material";
import { Formik } from "formik";

export default function Login() {
  const baseUrl = "http://localhost:8000/api/login";
  const router = useRouter();
  const [error, setError] = useState("");

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#10754a",
    "&:hover": {
      color: "black",
      backgroundColor: "#D6D6D6",
    },
  }));

  const loginUser = async (values) => {
    try {
      const response = await axios.post(baseUrl, {
        correo: values.user,        // Asegúrate de que estos nombres coincidan con los esperados por el backend
        contraseña: values.password,
      });
  
      const { token } = response.data;
  
      if (token) {
        localStorage.setItem("token", token);
        router.push("/"); // Redirigir al Home después del inicio de sesión
      } else {
        setError("Correo o contraseña incorrectos");
      }
    } catch (error) {
      console.error(error);
      setError("Error en la solicitud de inicio de sesión");
    }
  };
  

  return (
    <Formik
      initialValues={{
        user: "",
        password: "",
      }}
      onSubmit={async (values) => {
        await loginUser(values);
      }}
    >
      {({ handleBlur, handleChange, handleSubmit, values }) => (
        <form
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <div className="containerLogin">
            <div className="padreImg">
              <div className="containerImgLogin"></div>
            </div>

            <div className="containerFormLogin">
              <div>
                <h1
                  style={{
                    fontSize: "40px",
                  }}
                >
                  Inicia Sesión
                </h1>
              </div>
              <Grid container direction={"row"} spacing={6}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    className="Entradas"
                    placeholder="Correo"
                    value={values.user}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="user"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    className="Entradas"
                    placeholder="Contraseña"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                  />
                </Grid>
              </Grid>
              <br />
              <ColorButton type="submit">Entrar</ColorButton>
              {error && <div>{error}</div>}
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}
