"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  styled,
  Stack,
  Checkbox,
  FormControlLabel,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { PDFDocument, StandardFonts, values } from "pdf-lib";
import ProductServiceData from "../Organismos/ProductServiceData";
import PlaguesData from "../Organismos/PlaguesData";
import RadioField from "../Moleculas/RadioField";
import Image from "next/image";
import "../../../css/globals.css";

export default function AgregarOrdenDeServicio() {
  const [generatedPdf, setGeneratedPdf] = useState(null);
  //datos del cliente
  const [nombreCliente, setNombreCliente] = useState("");
  const [firmaDelCliente, setFirmaDelCliente] = useState("");
  const [direccionDelCliente, setDireccionDelCliente] = useState("");
  const [noContrato, setNoContrato] = useState("");
  const [noTelefono, setNoTelefono] = useState("");

  const camposDeCliente = [
    {
      name: "nombreCliente",
      label: "Nombre del Cliente",
      value: nombreCliente,
      setValue: setNombreCliente,
    },
    {
      name: "firmaDelCliente",
      label: "Nombre y Firma",
      value: firmaDelCliente,
      setValue: setFirmaDelCliente,
    },
    {
      name: "direccionDelCliente",
      label: "Dirección del Cliente",
      value: direccionDelCliente,
      setValue: setDireccionDelCliente,
    },
    {
      name: "noContrato",
      label: "No. de contrato",
      value: noContrato,
      setValue: setNoContrato,
    },
    {
      name: "noTelefono",
      label: "No. de Teléfono",
      value: noTelefono,
      setValue: setNoTelefono,
    },
  ];

  //datos de orden de servicio
  const [tipoServicio, setTipoServicio] = useState("");
  const [tipoVisita, setTipoVisita] = useState("");
  const [evaluacion, setEvaluacion] = useState(null);

  //datos de producto
  const [productos, setProductos] = useState([
    {
      nombreProducto: "",
      plagas: "",
      areas: "",
      metodoUtilizado: "",
      equipoUtilizado: "",
      dosis: "",
      mezclaPreparada: "",
      areaMetros: "",
    },
  ]);

  //actividad de plaga encontrada
  const [plagas, setPlagas] = useState([
    {
      codigoArea: "",
      codigoPlaga: "",
    },
  ]);

  //equipos
  const [cebadoraRoedor, setCebadoraRoedor] = useState("cebadoraRoedor");
  const [trampaDeCaptura, setTrampaDeCaptura] = useState("trampaDeCaptura");
  const [trampaDeLuz, setTrampaDeLuz] = useState("trampaDeLuz");

  //areas de oportunidad
  const [recomendacionesMyRentokill, setRecomendacionesMyRentokill] =
    useState(false);
  const [transportesSucios, setTransportesSucios] = useState(false);
  const [fallaDrenaje, setFallaDrenaje] = useState(false);
  const [grietasMuros, setGrietasMuros] = useState(false);
  const [lockersSucios, setLockersSucios] = useState(false);
  const [areasVerdesMal, setAreasVerdesMal] = useState(false);
  const [falloRegistros, setFalloRegistros] = useState(false);
  const [huecosPuertas, setHuecosPuertas] = useState(false);
  const [limpiezaPerimetro, setLimpiezaPerimetro] = useState(false);
  const [acumulacion, setAcumulacion] = useState(false);
  const [fallaPuertas, setFallaPuertas] = useState(false);
  const [sistemaExclusion, setSistemaExclusion] = useState(false);
  const [manejoAlmacen, setManejoAlmacen] = useState(false);
  const [manejoDesperdicios, setManejoDesperdicios] = useState(false);
  const [equiposDefectuosos, setEquiposDefectuosos] = useState(false);
  const [puertasAbiertas, setPuertasAbiertas] = useState(false);

  const checkboxes = [
    {
      state: recomendacionesMyRentokill,
      setState: setRecomendacionesMyRentokill,
      label: "Actualización / generación de recomendaciones myRentokil",
    },
    {
      state: transportesSucios,
      setState: setTransportesSucios,
      label: "Unidades de transporte sucias / dañadas",
    },
    {
      state: fallaDrenaje,
      setState: setFallaDrenaje,
      label: "Falla estructural en tubería de agua / drenaje",
    },
    {
      state: grietasMuros,
      setState: setGrietasMuros,
      label: "Grietas en muro o pared",
    },
    {
      state: lockersSucios,
      setState: setLockersSucios,
      label: "Baños / lockers sucios",
    },
    {
      state: areasVerdesMal,
      setState: setAreasVerdesMal,
      label: "Áreas verdes no podadas, descuidadas",
    },
    {
      state: falloRegistros,
      setState: setFalloRegistros,
      label: "Falla estructural en tapas de coladeras / registros",
    },
    {
      state: huecosPuertas,
      setState: setHuecosPuertas,
      label: "Huecos debajo de puertas / cortinas",
    },
    {
      state: limpiezaPerimetro,
      setState: setLimpiezaPerimetro,
      label: "Limpieza en perímetro: exterior o interior",
    },
    {
      state: acumulacion,
      setState: setAcumulacion,
      label: "Acumulación de: agua / basura",
    },
    {
      state: fallaPuertas,
      setState: setFallaPuertas,
      label: "Falla estructural en ventana / puertas / cortinas",
    },
    {
      state: sistemaExclusion,
      setState: setSistemaExclusion,
      label: "Colocar sistema de exclusión a ventanas / cortinas",
    },
    {
      state: manejoAlmacen,
      setState: setManejoAlmacen,
      label: "Mal manejo de producto en almacén",
    },
    {
      state: manejoDesperdicios,
      setState: setManejoDesperdicios,
      label: "Mal manejo de merma / desperdicios",
    },
    {
      state: equiposDefectuosos,
      setState: setEquiposDefectuosos,
      label: "Reemplazar equipos dañados",
    },
    {
      state: puertasAbiertas,
      setState: setPuertasAbiertas,
      label: "Puertas / ventanas abiertas",
    },
  ];

  //comentarios
  const [comentarios, setComentarios] = useState("");
  const COMENTARIOS_MAX_LENGTH = 2208;

  //datos laborales (zona inferior del documento)
  const [pagoServicio, setPagoServicio] = useState(false);
  const [pagoCheque, setPagoCheque] = useState(false);
  const [costoServicio, setCostoServicio] = useState("");
  const [nombreEspecialista, setNombreEspecialista] = useState("");
  const [fechaProgramada, setFechaProgramada] = useState("");
  const [fechaRealizacion, setFechaRealizacion] = useState("");
  const [areaServicio, setAreaServicio] = useState("");
  const [horaEntrada, setHoraEntrada] = useState("");
  const [horaSalida, setHoraSalida] = useState("");

  const camposDeFecha = [
    {
      name: "fechaProgramada",
      label: "Fecha programada de servicio",
      value: fechaProgramada,
      setValue: setFechaProgramada,
    },
    {
      name: "fechaRealizacion",
      label: "Fecha de realización de servicio",
      value: fechaRealizacion,
      setValue: setFechaRealizacion,
    },
    {
      name: "horaEntrada",
      label: "Hora de entrada (24h)",
      value: horaEntrada,
      setValue: setHoraEntrada,
    },
    {
      name: "horaSalida",
      label: "Hora de salida (24h)",
      value: horaSalida,
      setValue: setHoraSalida,
    },
  ];

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#10754a",
    "&:hover": {
      color: "black",
      backgroundColor: "#D6D6D6",
    },
  }));

  const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    "&.Mui-checked": {
      color: "#10754a",
    },
  }));

  const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    "& .MuiTypography-root": {
      color: "#000000",
    },
  }));

  const handleSubmit = async (event) => {
    console.log(nombreCliente, firmaDelCliente, tipoServicio);
  };

  const handleOnComentariosChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= COMENTARIOS_MAX_LENGTH) {
      setComentarios(inputValue);
    }
  };

  //Aqui con esta url estamos guardando los datos }
  //Ojo esta es la url que tenemos que mandar para la base de datos para poder descargar
  const handlePdf = async (event) => {
    try {
      const url =
        "https://res.cloudinary.com/dpz2wx43s/image/upload/v1719597284/newCesar/dtjy5hxwonghxfzdpljq.pdf";
      const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const { width, height } = firstPage.getSize();
      //traer la info de la bd

      const datosCliente = [
        //fila 1
        { texto: nombreCliente, x: 120, y: 525 },
        { texto: firmaDelCliente, x: 475, y: 525 },
        //fila 2
        { texto: direccionDelCliente, x: 145, y: 518 },
        //fila 3
        { texto: noContrato, x: 145, y: 511 },
        { texto: noTelefono, x: 270, y: 511 },
      ];

      for (const { texto, x, y } of datosCliente) {
        firstPage.drawText(texto, { x, y, size: 5, font: helveticaFont });
      }

      // EVALUACION DEL SERVICIO 0 - 10
      const evaluacionXPosition = 395 + evaluacion * 29;

      firstPage.drawText("X", {
        x: evaluacionXPosition,
        y: 518,
        size: 6,
        font: helveticaFont,
      });

      // TIPO DE SERVICIO
      //fila4
      const serviciosXPositions = {
        industria: 157,
        comercio: 192,
        residencial: 221,
        oficina: 250,
        flotilla: 279,
        otro: 351,
      };

      if (serviciosXPositions.hasOwnProperty(tipoServicio)) {
        firstPage.drawText("X", {
          x: serviciosXPositions[tipoServicio],
          y: 504,
          size: 6,
          font: helveticaFont,
        });
      }

      // TIPO DE VISITA
      //fila 5
      const visitasXPositions = {
        c: 157,
        cp: 192,
        dl: 221,
        f: 250,
        i: 279,
        ir: 308,
        qa: 337,
        r: 366,
        rv: 395,
      };

      if (visitasXPositions.hasOwnProperty(tipoVisita)) {
        firstPage.drawText("X", {
          x: visitasXPositions[tipoVisita],
          y: 497,
          size: 6,
          font: helveticaFont,
        });
      }

      // DATOS DE PRODUCTOS
      // fila 6 - 7
      const columnasProductos = [
        { label: "nombreProducto", x: 300 },
        { label: "plagas", x: 412 },
        { label: "areas", x: 471 }, 
        { label: "metodoUtilizado", x: 529 },
        { label: "equipoUtilizado", x: 558 },
        { label: "dosis", x: 586 },
        { label: "mezclaPreparada", x: 614 },
        { label: "areaMetros", x: 645 },
      ];

      for (const producto of productos) {
        const yCoordinate = 449 - 22 * productos.indexOf(producto);

        for (const columna of columnasProductos) {
          firstPage.drawText(producto[columna.label], {
            x: columna.x,
            y: yCoordinate,
            size: 5,
            font: helveticaFont,
          });
        }
      }

      // ACTIVIDAD DE PLAGA ENCONTRADA
      //fila 8
      const columnasPlagas = [
        { label: "codigoArea", x: 83 },
        { label: "codigoPlaga", x: 143 },
      ];

      for (const plaga of plagas) {
        const yCoordinate = 270 - 17 * plagas.indexOf(plaga);

        for (const columna of columnasPlagas) {
          firstPage.drawText(plaga[columna.label], {
            x: columna.x,
            y: yCoordinate,
            size: 5,
            font: helveticaFont,
          });
        }
      }

      //DATOS DE EQUIPO
      const equipos = [
        { tipo: "cebadoraRoedor", y: 269 },
        { tipo: "trampaDeCaptura", y: 251 },
        { tipo: "trampaDeLuz", y: 234 },
      ];

      const opciones = [
        { estado: "inventarioAnterior", x: 278 },
        { estado: "requerido", x: 307 },
        { estado: "obstruido", x: 336 },
        { estado: "averiado", x: 365 },
        { estado: "activo", x: 394 },
      ];

      for (const equipo of equipos) {
        for (const opcion of opciones) {
          if (eval(equipo.tipo) === opcion.estado) {
            firstPage.drawText("X", {
              x: opcion.x,
              y: equipo.y,
              size: 8,
              font: helveticaFont,
            });
          }
        }
      }

      //AREAS DE OPORTUNIDAD
      const areasDeOportunidad = [
        { nombre: "recomendacionesMyRentokill", fila: 269, columna: 434 },
        { nombre: "transportesSucios", fila: 269, columna: 494 },
        { nombre: "fallaDrenaje", fila: 269, columna: 550 },
        { nombre: "grietasMuros", fila: 269, columna: 635 },
        { nombre: "lockersSucios", fila: 251, columna: 434 },
        { nombre: "areasVerdesMal", fila: 251, columna: 494 },
        { nombre: "falloRegistros", fila: 251, columna: 550 },
        { nombre: "huecosPuertas", fila: 251, columna: 635 },
        { nombre: "limpiezaPerimetro", fila: 234, columna: 434 },
        { nombre: "acumulacion", fila: 234, columna: 494 },
        { nombre: "fallaPuertas", fila: 234, columna: 550 },
        { nombre: "sistemaExclusion", fila: 234, columna: 635 },
        { nombre: "manejoAlmacen", fila: 218, columna: 434 },
        { nombre: "manejoDesperdicios", fila: 218, columna: 494 },
        { nombre: "equiposDefectuosos", fila: 218, columna: 550 },
        { nombre: "puertasAbiertas", fila: 218, columna: 635 },
      ];

      for (const area of areasDeOportunidad) {
        if (eval(area.nombre)) {
          firstPage.drawText("X", {
            x: area.columna,
            y: area.fila,
            size: 9,
            font: helveticaFont,
          });
        }
      }

      //COMENTARIOS
      const comentariosLines = comentarios.match(/.{1,276}/g) || [];
      const initialY = 192;
      const lineSalt = -13.5;

      for (let i = 0; i < comentariosLines.length; i++) {
        const yCoordinate = initialY + i * lineSalt;
        firstPage.drawText(comentariosLines[i], {
          x: 83,
          y: yCoordinate,
          size: 5,
          font: helveticaFont,
        });
      }

      //DATOS LABORALES
      const datosLaborales = [
        { texto: pagoServicio ? "X" : "", x: 105, y: 83, size: 9 },
        { texto: pagoCheque ? "X" : "", x: 105, y: 68, size: 9 },
        { texto: `$ ${costoServicio}`, x: 185, y: 75, size: 7 },
        { texto: nombreEspecialista, x: 327, y: 83, size: 6 },
        { texto: areaServicio, x: 587, y: 83, size: 6 },
      ];

      for (const data of datosLaborales) {
        firstPage.drawText(data.texto, {
          x: data.x,
          y: data.y,
          size: data.size,
          font: helveticaFont,
        });
      }

      const camposPdfDeFecha = [
        { name: "fechaProgramada", x: 315 },
        { name: "fechaRealizacion", x: 475 },
        { name: "horaEntrada", x: 575 },
        { name: "horaSalida", x: 663 },
      ];

      for (const { name, x } of camposPdfDeFecha) {
        let value = eval(name);
        if (name.includes("fecha")) {
          const parts = value.split("-");
          if (parts.length === 3) {
            value = `${parts[2]} - ${parts[1]} - ${parts[0]}`;
          }
        }
        firstPage.drawText(value, {
          x: x,
          y: 68,
          size: 7,
          font: helveticaFont,
        });
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
          Agregar Orden De Servicio
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
          {/* Datos del cliente */}
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
            <h2 className="form-subtitle">DATOS DEL CLIENTE</h2>

            <Grid
              container
              direction={"row"}
              spacing={2}
              display={"flex"}
              justifyContent={"center"}
              xs={11}
            >
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
            </Grid>

            <h2 className="form-subtitle">DATOS DE LA ORDEN</h2>

            <Grid
              container
              spacing={3}
              display={"flex"}
              justifyContent={"center"}
              xs={10}
            >
              <Grid item xs={11} lg={7}>
                <RadioField
                  label="Tipo de Servicio"
                  options={[
                    { value: "industria", label: "Industria" },
                    { value: "comercio", label: "Comercio" },
                    {
                      value: "residencial",
                      label: "Residencial",
                    },
                    { value: "oficina", label: "Oficina" },
                    { value: "flotilla", label: "Flotilla" },
                    { value: "otro", label: "Otro" },
                  ]}
                  value={tipoServicio}
                  onChange={setTipoServicio}
                />
              </Grid>

              <Grid item xs={11} lg={7}>
                <RadioField
                  label="Tipo de Visita"
                  options={[
                    { value: "c", label: "C" },
                    { value: "cp", label: "CP" },
                    { value: "dl", label: "DL" },
                    { value: "f", label: "F" },
                    { value: "i", label: "I" },
                    { value: "ir", label: "IR" },
                    { value: "qa", label: "QA" },
                    { value: "r", label: "R" },
                    { value: "rv", label: "RV" },
                  ]}
                  value={tipoVisita}
                  onChange={setTipoVisita}
                />
              </Grid>

              <Grid item xs={11} lg={7}>
                <RadioField
                  label="Evaluación del Servicio"
                  options={Array.from({ length: 11 }, (_, index) => ({
                    value: index.toString(),
                    label: index.toString(),
                  }))}
                  value={evaluacion}
                  onChange={setEvaluacion}
                />
              </Grid>
            </Grid>

            <h2 className="form-subtitle">DATOS DEL SERVICIO</h2>

            <Grid
              container
              direction={"row"}
              spacing={2}
              display={"flex"}
              justifyContent={"center"}
              xs={11}
            >
              <ProductServiceData
                productData={productos}
                setProductData={setProductos}
              />
            </Grid>

            <h2 className="form-subtitle">ACTIVIDAD DE PLAGA ENCONTRADA</h2>

            <Grid
              container
              direction={"row"}
              spacing={2}
              display={"flex"}
              justifyContent={"center"}
              xs={11}
            >
              <PlaguesData plagueData={plagas} setPlagueData={setPlagas} />
            </Grid>

            <h2 className="form-subtitle">EQUIPOS</h2>
            {[
              {
                label: "Estación cebadera de roedor",
                state: cebadoraRoedor,
                setState: setCebadoraRoedor,
              },
              {
                label: "Trampas de captura múltiple",
                state: trampaDeCaptura,
                setState: setTrampaDeCaptura,
              },
              {
                label: "Trampas de luz",
                state: trampaDeLuz,
                setState: setTrampaDeLuz,
              },
            ].map((item, index) => (
              <Grid item lg={8} key={index}>
                <RadioField
                  label={item.label}
                  options={[
                    {
                      value: "inventarioAnterior",
                      label: "Inventario Anterior",
                    },
                    { value: "requerido", label: "Equipo Requerido" },
                    { value: "obstruido", label: "Equipo Obstruido" },
                    { value: "averiado", label: "Equipo Dañado" },
                    { value: "activo", label: "Equipo con Actividad" },
                  ]}
                  value={item.state}
                  onChange={item.setState}
                />
              </Grid>
            ))}

            <h2 className="form-subtitle">ÁREAS DE OPORTUNIDAD</h2>

            <Grid container direction="row" justifyContent="center" xs={11}>
              {checkboxes.map(({ state, setState, label }, index) => (
                <Grid item lg={4} key={index}>
                  <CustomFormControlLabel
                    key={index}
                    control={
                      <CustomCheckbox
                        checked={state}
                        onChange={(e) => setState(e.target.checked)}
                        color="primary"
                      />
                    }
                    label={label}
                  />
                </Grid>
              ))}
            </Grid>

            <h2 className="form-subtitle">COMENTARIOS</h2>

            <Grid
              container
              direction="row"
              justifyContent="center"
              xs={12}
              lg={11}
            >
              <Grid item xs={12} lg={11}>
                <TextField
                  type="text"
                  name="comentarios"
                  label="Comentarios sobre el servicio, así como descripción de las áreas de oportunidad encontradas que requieren mejora para un control eficiente"
                  fullWidth
                  multiline
                  rows={7}
                  value={comentarios}
                  onChange={handleOnComentariosChange}
                  inputProps={{ maxLength: COMENTARIOS_MAX_LENGTH }}
                />
                <Typography
                  variant="caption"
                  color={
                    comentarios.length <= COMENTARIOS_MAX_LENGTH
                      ? "inherit"
                      : "error"
                  }
                >
                  {comentarios.length}/{COMENTARIOS_MAX_LENGTH}
                </Typography>
              </Grid>
            </Grid>

            <h2 className="form-subtitle">DATOS LABORALES</h2>

            <Grid
              container
              direction="row"
              justifyContent="center"
              xs={11}
              spacing={5}
            >
              {[
                {
                  state: pagoServicio,
                  setState: setPagoServicio,
                  label: "Pago de servicio",
                },
                {
                  state: pagoCheque,
                  setState: setPagoCheque,
                  label: "Pago con cheque",
                },
              ].map(({ state, setState, label }, index) => (
                <Grid item lg={4} key={index}>
                  <CustomFormControlLabel
                    key={index}
                    control={
                      <CustomCheckbox
                        checked={state}
                        onChange={(e) => setState(e.target.checked)}
                        color="primary"
                      />
                    }
                    label={label}
                  />
                </Grid>
              ))}

              <Grid item xs={12} lg={3}>
                <TextField
                  type="number"
                  name="costoServicio"
                  label="Costo de Servicio"
                  fullWidth
                  value={costoServicio}
                  onChange={(event) => {
                    setCostoServicio(event.target.value);
                  }}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <TextField
                  type="text"
                  name="nombreEspecialista"
                  label="Nombre y firma del especialista técnico"
                  fullWidth
                  value={nombreEspecialista}
                  onChange={(event) => {
                    setNombreEspecialista(event.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <TextField
                  type="text"
                  name="areaServicio"
                  label="Área de servicio"
                  fullWidth
                  value={areaServicio}
                  onChange={(event) => {
                    setAreaServicio(event.target.value);
                  }}
                />
              </Grid>

              {camposDeFecha.map(({ name, label, value, setValue }, index) => (
                <Grid item xs={12} lg={3} key={index}>
                  <TextField
                    type={name.includes("hora") ? "time" : "date"}
                    name={name}
                    label={label}
                    fullWidth
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              ))}
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
                    new Blob([generatedPdf], {
                      type: "application/pdf",
                    })
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
