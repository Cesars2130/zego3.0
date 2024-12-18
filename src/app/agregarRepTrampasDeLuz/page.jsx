"use client";
import React, { useState } from "react";
import { TextField, Button, styled, Stack, Grid, Box } from "@mui/material";
import { PDFDocument, StandardFonts, values } from "pdf-lib";
import LightTrapData from "../Organismos/LightTrapData";
import Image from "next/image";
import "../../../css/globals.css";
export default function AgregarRepTrampasDeLuz() {
  const [generatedPdf, setGeneratedPdf] = useState(null);

  //datos de encabezado
  const [cliente, setCliente] = useState("");
  const [nombreResponsable, setNombreResponsable] = useState("");
  const [nombreEspecialista, setNombreEspecialista] = useState("");
  const [fechaServicio, setFechaServicio] = useState("");
  const [areaServicio, setAreaServicio] = useState("");
  const [folio, setFolio] = useState("");

  const camposDeReporte = [
    { name: "cliente", label: "Cliente", value: cliente, setValue: setCliente },
    {
      name: "nombreResponsable",
      label: "Nombre del responsable",
      value: nombreResponsable,
      setValue: setNombreResponsable,
    },
    {
      name: "nombreEspecialista",
      label: "Nombre del especialista",
      value: nombreEspecialista,
      setValue: setNombreEspecialista,
    },
    {
      name: "fechaServicio",
      label: "Fecha de servicio",
      value: fechaServicio,
      setValue: setFechaServicio,
    },
    {
      name: "areaServicio",
      label: "Area de servicio",
      value: areaServicio,
      setValue: setAreaServicio,
    },
    {
      name: "folio",
      label: "Número de folio de orden de servicio",
      value: folio,
      setValue: setFolio,
    },
  ];

  //datos de reportes
  const [reportes, setReportes] = useState([
    {
      noReporte: 0,
      ubicacionEquipo: "",
      accionRentokil: {
        cp: false,
        ld: false,
        id: false,
        cf: false,
      },
      cantidadPlaga: {
        mm: 0,
        mc: 0,
        md: 0,
        mj: 0,
        mf: 0,
        mp: 0,
        za: 0,
        mn: 0,
        ab: 0,
        ot1: 0,
        ot2: 0,
        ot3: 0,
      },
      accionCliente: {
        la: false,
        da: false,
        ca: false,
        lo: false,
        otC: false,
        nn: false,
      },
      condicionEquipo: {
        bn: false,
        ob: false,
        ne: false,
        rc: false,
        otE: false,
      },
      comentarios: "",
    },
  ]);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#10754a",
    "&:hover": {
      color: "black",
      backgroundColor: "#D6D6D6",
    },
  }));

  const handleSubmit = async (event) => {
    console.log(cliente, firmaDelCliente, tipoDeServicio);
  };

  //Aqui con esta url estamos guardando los datos }
  //Ojo esta es la url que tenemos que mandar para la base de datos para poder descargar
  const handlePdf = async (event) => {
    try {
      const url =
        "https://res.cloudinary.com/dclm8x0pj/image/upload/v1726269196/ReporteRevisionTrampasDeLuz_zt6yhj.pdf";
      const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const { width, height } = firstPage.getSize();
      //traer la info de la bd

      //datos de reporte
      const camposPdfDeFecha = [
        { name: "fechaServicio", x: 474, y: 460, size: 7 },
      ];

      const datosReporte = [
        { name: "cliente", texto: cliente, x: 101, y: 475, size: 6 },
        {
          name: "nombreResponsable",
          texto: nombreResponsable,
          x: 480,
          y: 475,
          size: 6,
        },
        {
          name: "nombreEspecialista",
          texto: nombreEspecialista,
          x: 132,
          y: 460,
          size: 6,
        },
        {
          name: "fechaServicio",
          texto: fechaServicio,
          x: 472,
          y: 460,
          size: 7,
        },
        { name: "areaServicio", texto: areaServicio, x: 588, y: 460, size: 6 },
        { name: "folio", texto: folio, x: 708, y: 460, size: 6 },
      ];

      for (const dato of datosReporte) {
        let value = dato.texto;

        const fechaCampo = camposPdfDeFecha.find(
          (campo) => campo.name === dato.name
        );
        if (fechaCampo) {
          const parts = value.split("-");
          if (parts.length === 3) {
            value = "${parts[2]} - ${parts[1]} - ${parts[0]}";
          }
        }

        firstPage.drawText(value, {
          x: dato.x,
          y: dato.y,
          size: dato.size,
          font: helveticaFont,
        });
      }

      const columnasReportes = [
        { label: "noReporte", x: 85, size: 6 },
        { label: "ubicacionEquipo", x: 107, size: 6 },
        // accionRentokil
        { label: "cp", x: 195, size: 8 },
        { label: "ld", x: 211, size: 8 },
        { label: "id", x: 228, size: 8 },
        { label: "cf", x: 244, size: 8 },
        // cantidadPlaga
        { label: "mm", x: 261, size: 6 },
        { label: "mc", x: 279, size: 6 },
        { label: "md", x: 299, size: 6 },
        { label: "mj", x: 320, size: 6 },
        { label: "mf", x: 338, size: 6 },
        { label: "mp", x: 355, size: 6 },
        { label: "za", x: 374, size: 6 },
        { label: "mn", x: 392, size: 6 },
        { label: "ab", x: 410, size: 6 },
        { label: "ot1", x: 427, size: 6 },
        { label: "ot2", x: 446, size: 6 },
        { label: "ot3", x: 464, size: 6 },
        // accionCliente
        { label: "la", x: 481, size: 8 },
        { label: "da", x: 498, size: 8 },
        { label: "ca", x: 516, size: 8 },
        { label: "lo", x: 534, size: 8 },
        { label: "otC", x: 553, size: 8 },
        { label: "nn", x: 571, size: 8 },
        // condicionEquipo
        { label: "bn", x: 590, size: 8 },
        { label: "ob", x: 608, size: 8 },
        { label: "ne", x: 628, size: 8 },
        { label: "rc", x: 644, size: 8 },
        { label: "otE", x: 662, size: 8 },
        // comentarios
        { label: "comentarios", x: 678, size: 6 },
      ];

      const getXPositionAndText = (reporte, columna) => {
        const nestedObjects = [
          "accionRentokil",
          "accionCliente",
          "condicionEquipo",
        ];
        const cantidadPlagaLabels = [
          "mm",
          "mc",
          "md",
          "mj",
          "mf",
          "mp",
          "za",
          "mn",
          "ab",
          "ot1",
          "ot2",
          "ot3",
        ];

        if (cantidadPlagaLabels.includes(columna.label)) {
          return {
            x: columna.x,
            text: reporte.cantidadPlaga[columna.label].toString(),
            size: columna.size,
          };
        }

        for (const obj of nestedObjects) {
          if (reporte[obj] && reporte[obj].hasOwnProperty(columna.label)) {
            const value = reporte[obj][columna.label];
            return {
              x: columna.x,
              text: value === true ? "X" : "",
              size: columna.size,
            };
          }
        }

        const value = reporte[columna.label];
        return {
          x: columna.x,
          text: value != null ? value.toString() : "",
          size: columna.size,
        };
      };

      for (const [index, reporte] of reportes.entries()) {
        const yCoordinate = 399 - 9.8 * index;

        for (const columna of columnasReportes) {
          const { x, text, size } = getXPositionAndText(reporte, columna);

          if (text) {
            firstPage.drawText(text, {
              x,
              y: yCoordinate,
              size,
              font: helveticaFont,
            });
          }
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
          Agregar Reporte Trampas De Luz
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
                <h2 className="form-subtitle">DATOS DE REPORTE</h2>
                {camposDeReporte.map(
                  ({ name, label, value, setValue }, index) => (
                    <Grid item xs={10} lg={6} key={index}>
                      <TextField
                        type={name === "fechaServicio" ? "date" : "text"}
                        name={name}
                        label={label}
                        fullWidth
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        InputLabelProps={
                          name === "fechaServicio" ? { shrink: true } : {}
                        }
                      />
                    </Grid>
                  )
                )}

                <LightTrapData
                  lightTrapData={reportes}
                  setLightTrapData={setReportes}
                />
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
