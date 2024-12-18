"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  styled,
  Stack,
  Grid,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import InspectionData from "../Organismos/InspectionData";
import { PDFDocument, StandardFonts, values } from "pdf-lib";
import Image from "next/image";
import "../../../css/globals.css";
export default function AgregarRepNIvelPiso() {
  const [generatedPdf, setGeneratedPdf] = useState(null);
  //Datos del cliente
  const [nombreCliente, setNombreCliente] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tiendaNo, setTiendaNo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [gerente, setGerente] = useState("");

  const camposDeCliente = [
    {
      name: "nombreCliente",
      label: "Nombre",
      value: nombreCliente,
      setValue: setNombreCliente,
    },
    {
      name: "direccion",
      label: "Dirección",
      value: direccion,
      setValue: setDireccion,
    },
    {
      name: "tiendaNo",
      label: "Tienda No.",
      value: tiendaNo,
      setValue: setTiendaNo,
    },
    {
      name: "telefono",
      label: "Teléfono",
      value: telefono,
      setValue: setTelefono,
    },
    { name: "gerente", label: "Gerente", value: gerente, setValue: setGerente },
  ];

  //Datos de la sucursal
  const [folio, setFolio] = useState("");
  const [bitacora, setBitacora] = useState("");
  const [tecnico, setTecnico] = useState("");
  const [tipoDeServicio, setTipoDeServicio] = useState("");
  const [ruta, setRuta] = useState("");
  const [ordenDeCompra, setOrdenDeCompra] = useState("");
  const [queja, setQueja] = useState("");
  const [inspeccion, setInspeccion] = useState("");

  const camposDeSucursal = [
    { name: "folio", label: "Folio SAV", value: folio, setValue: setFolio },
    {
      name: "bitacora",
      label: "Bitacora",
      value: bitacora,
      setValue: setBitacora,
    },
    { name: "tecnico", label: "Técnico", value: tecnico, setValue: setTecnico },
    {
      name: "tipoDeServicio",
      label: "Tipo de Servicio",
      value: tipoDeServicio,
      setValue: setTipoDeServicio,
    },
    { name: "ruta", label: "Ruta", value: ruta, setValue: setRuta },
    {
      name: "ordenDeCompra",
      label: "Orden de Compra",
      value: ordenDeCompra,
      setValue: setOrdenDeCompra,
    },
    { name: "queja", label: "Queja", value: queja, setValue: setQueja },
    {
      name: "inspeccion",
      label: "Inspección",
      value: inspeccion,
      setValue: setInspeccion,
    },
  ];

  //datos de tiempo
  const [horaEntrada, setHoraEntrada] = useState("");
  const [horaSalida, setHoraSalida] = useState("");
  const [fecha, setFecha] = useState("");

  //datos de inspeccion
  const [inspector, setInspector] = useState("");
  const [inspecciones, setInspecciones] = useState([
    {
      area: "",
      infestacionActiva: null,
      plagaEncontrada: "",
      condicionesHigiene: null,
      correctivaRentokil: null,
      correctivaCliente: null,
      correccionRequerida: "",
    },
  ]);

  const [comentarios, setComentarios] = useState("");
  const [proximaVisita, setProximaVisita] = useState(null);
  const [fechaVisita, setFechaVisita] = useState("");

  const handleSubmit = async (event) => {
    console.log(nombreCliente, firmaDelCliente, tipoDeServicio);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#10754a",
    "&:hover": {
      color: "black",
      backgroundColor: "#D6D6D6",
    },
  }));
  //Aqui con esta url estamos guardando los datos }
  //Ojo esta es la url que tenemos que mandar para la base de datos para poder descargar
  const handlePdf = async (event) => {
    try {
      const url =
        "https://res.cloudinary.com/dpz2wx43s/image/upload/v1719597284/newCesar/cumbladan418li4dupag.pdf";
      const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];

      // Datos laborales
      const camposPdfDeFechaLaboral = [
        { name: "fecha", x: 140, y: 655, size: 6 },
      ];

      const datosLaborales = [
        { name: "horaEntrada", texto: horaEntrada, x: 140, y: 672, size: 6 },
        { name: "horaSalida", texto: horaSalida, x: 140, y: 662, size: 6 },
        { name: "fecha", texto: fecha, x: 140, y: 655, size: 6 },
      ];

      for (const dato of datosLaborales) {
        let value = dato.texto;

        if (value !== undefined) {
          const fechaCampo = camposPdfDeFechaLaboral.find(
            (campo) => campo.name === dato.name
          );
          if (fechaCampo) {
            const parts = value.split("-");
            if (parts.length === 3) {
              value = `${parts[2]} - ${parts[1]} - ${parts[0]}`;
            }
          }

          firstPage.drawText(value, {
            x: dato.x,
            y: dato.y,
            size: dato.size,
            font: helveticaFont,
          });
        }
      }

      // Datos de la sucursal
      const datosSucursal = [
        { texto: folio, x: 243, y: 663, size: 6 },
        { texto: bitacora, x: 240, y: 655, size: 6 },
        { texto: tecnico, x: 238, y: 648, size: 6 },
        { texto: tipoDeServicio, x: 250, y: 641.5, size: 6 },
        { texto: ruta, x: 230, y: 634.5, size: 6 },
        { texto: ordenDeCompra, x: 313, y: 655, size: 6 },
        { texto: queja, x: 313, y: 641.5, size: 6 },
        { texto: inspeccion, x: 372, y: 641.5, size: 6 },
      ];

      for (const dato of datosSucursal) {
        if (dato.texto !== undefined) {
          firstPage.drawText(dato.texto, {
            x: dato.x,
            y: dato.y,
            size: dato.size,
            font: helveticaFont,
          });
        }
      }

      // Datos del cliente
      const datosCliente = [
        { texto: nombreCliente, x: 475, y: 663, size: 6 },
        { texto: direccion, x: 475, y: 655, size: 6 },
        { texto: tiendaNo, x: 475, y: 648, size: 6 },
        { texto: telefono, x: 530, y: 648, size: 6 },
        { texto: gerente, x: 475, y: 641.5, size: 6 },
      ];

      for (const dato of datosCliente) {
        if (dato.texto !== undefined) {
          firstPage.drawText(dato.texto, {
            x: dato.x,
            y: dato.y,
            size: dato.size,
            font: helveticaFont,
          });
        }
      }

      if (inspector !== undefined) {
        firstPage.drawText(inspector, {
          x: 78,
          y: 615,
          size: 6,
          font: helveticaFont,
        });
      }

      const columnasInspecciones = [
        { label: "area", x: 85 },
        { label: "plagaEncontrada", x: 215 },
        { label: "infestacionActiva", x: 174 },
        { label: "condicionesHigiene", x: 294 },
        { label: "correctivaRentokil", x: 359 },
        { label: "correctivaCliente", x: 388 },
        { label: "correccionRequerida", x: 410 },
      ];

      const getXPositionAndText = (inspeccion, columna) => {
        switch (columna.label) {
          case "condicionesHigiene":
            return { x: inspeccion.condicionesHigiene ? 294 : 328, text: "X" };
          case "infestacionActiva":
            return { x: inspeccion.infestacionActiva ? 174 : 195, text: "X" };
          case "correctivaRentokil":
            return {
              x: columna.x,
              text: inspeccion.correctivaRentokil ? "X" : "",
            };
          case "correctivaCliente":
            return {
              x: columna.x,
              text: inspeccion.correctivaCliente ? "X" : "",
            };
          default:
            return {
              x: columna.x,
              text:
                inspeccion[columna.label] !== null &&
                inspeccion[columna.label] !== undefined
                  ? inspeccion[columna.label].toString()
                  : "",
            };
        }
      };

      for (const [index, inspeccion] of inspecciones.entries()) {
        const yCoordinate = 563 - 13.5 * index;

        for (const columna of columnasInspecciones) {
          const { x, text } = getXPositionAndText(inspeccion, columna);

          if (text !== "") {
            firstPage.drawText(text, {
              x: x,
              y: yCoordinate,
              size: 6,
              font: helveticaFont,
            });
          }
        }
      }

      // Zona inferior
      const camposPdfDeFecha = [
        { name: "fechaVisita", x: 349, y: 256, size: 6 },
      ];

      const datosVisita = [
        { texto: comentarios, x: 80, y: 345, size: 6 },
        { texto: "X", x: proximaVisita ? 211 : 270, y: 255.5, size: 8 },
        { name: "fechaVisita", value: fechaVisita, x: 349, y: 256, size: 6 },
      ];

      for (const dato of datosVisita) {
        let value = dato.texto !== undefined ? dato.texto : dato.value;

        if (value !== undefined) {
          const fechaCampo = camposPdfDeFecha.find(
            (campo) => campo.name === dato.name
          );
          if (fechaCampo) {
            const parts = value.split("-");
            if (parts.length === 3) {
              value = `${parts[2]} - ${parts[1]} - ${parts[0]}`;
            }
          }

          firstPage.drawText(value, {
            x: dato.x,
            y: dato.y,
            size: dato.size,
            font: helveticaFont,
          });
        }
      }

      const pdfBytes = await pdfDoc.save();
      setGeneratedPdf(pdfBytes); // Guarda los bytes del PDF generado en el estado local
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
      setPdfUrl(URL.createObjectURL(pdfBlob));
    } catch (error) {
      console.error("Error al generar el PDF:", error);
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
        <h1
          style={{
            margin: "0px",
            marginTop: "10px",
          }}
        >
          Agregar Reporte Nivel Piso
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction={"row"}
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid item xs={12} display={"flex"} justifyContent={"center"}>
              <h1
                style={{
                  margin: "0px",
                }}
              >
                Coca cola
              </h1>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"center"}>
              <h2
                style={{
                  margin: "0px",
                }}
              >
                Poniente
              </h2>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{ minWidth: 120 }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Image
                  width={100}
                  height={100}
                  src="data:image/png;base64,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"
                  alt="imagen"
                  className="animalito"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              display={"flex"}
              justifyContent={"center"}
            >
              <Grid
                container
                direction={"row"}
                spacing={2}
                display={"flex"}
                justifyContent={"center"}
                xs={11}
                style={{ paddingTop: "2%" }}
              >
                <h2 className="form-subtitle">DATOS DEL CLIENTE</h2>
                {camposDeCliente.map(
                  ({ name, label, value, setValue }, index) => (
                    <Grid item xs={11} lg={6} key={index}>
                      <TextField
                        type="text"
                        name={name}
                        label={label}
                        fullWidth
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                      />
                    </Grid>
                  )
                )}

                <h2 className="form-subtitle">INFORMACIÓN DE LA SUCURSAL</h2>
                {camposDeSucursal.map(
                  ({ name, label, value, setValue }, index) => (
                    <Grid item xs={11} lg={6} key={index}>
                      <TextField
                        type="text"
                        name={name}
                        label={label}
                        fullWidth
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                      />
                    </Grid>
                  )
                )}

                <h2 className="form-subtitle">DATOS LABORALES</h2>
                <Grid item xs={12} lg={4}>
                  <TextField
                    type="time"
                    name="horaEntrada"
                    label="Hora de entrada"
                    fullWidth
                    value={horaEntrada}
                    onChange={(event) => setHoraEntrada(event.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid item xs={12} lg={4}>
                  <TextField
                    type="time"
                    name="horaSalida"
                    label="Hora de salida"
                    fullWidth
                    value={horaSalida}
                    onChange={(event) => setHoraSalida(event.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid item xs={12} lg={4}>
                  <TextField
                    type="date"
                    name="fecha"
                    label="Fecha"
                    fullWidth
                    value={fecha}
                    onChange={(event) => setFecha(event.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <h2 className="form-subtitle">DATOS DE INSPECCIÓN</h2>
                <Grid item xs={12} lg={12}>
                  <TextField
                    type="text"
                    name="inspector"
                    label="Inspector"
                    fullWidth
                    value={inspector}
                    onChange={(event) => setInspector(event.target.value)}
                  />
                </Grid>

                <InspectionData
                  inspectionData={inspecciones}
                  setInspectionData={setInspecciones}
                />

                <Grid item xs={12} lg={12}>
                  <TextField
                    type="text"
                    name="comentarios"
                    label="Comentarios adicionales"
                    fullWidth
                    value={comentarios}
                    onChange={(event) => setComentarios(event.target.value)}
                  />
                </Grid>

                <h2 className="form-subtitle">DATOS DE PRÓXIMA VISITA</h2>
                <Grid item xs={12} lg={4}>
                  <FormControl className="formLabel">
                    <FormLabel component="legend">Próxima visita</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Si"
                        onChange={() => {
                          setProximaVisita(true);
                        }}
                        control={<Radio />}
                        label="SI"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        onChange={() => {
                          setProximaVisita(false);
                        }}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <TextField
                    type="date"
                    name="fecha"
                    label="Fecha"
                    fullWidth
                    value={fechaVisita}
                    onChange={(event) => setFechaVisita(event.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              maxHeight={50}
            >
              <Stack spacing={2} direction="row">
                <ColorButton onClick={handlePdf} variant="contained">
                  AGREGAR
                </ColorButton>
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              maxHeight={50}
            >
              {generatedPdf && (
                <a
                  href={URL.createObjectURL(
                    new Blob([generatedPdf], { type: "application/pdf" })
                  )}
                  download="OrdenDeServicio.pdf"
                >
                  Descargar PDF
                </a>
              )}
            </Grid>
          </Grid>

          {/* Agregar un enlace para descargar el PDF */}
        </form>
      </div>
      <div className="clientes-herramientas"></div>
    </>
  );
}
