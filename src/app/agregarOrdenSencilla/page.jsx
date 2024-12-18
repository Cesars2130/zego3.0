"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  styled,
  Stack,
  Grid,
  Box,
  Autocomplete,
} from "@mui/material";
import { PDFDocument, StandardFonts, values } from "pdf-lib";
import Image from "next/image";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import "../../../css/globals.css";

export default function AgregarOrdenSencilla() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));

  const [generatedPdf, setGeneratedPdf] = useState(null);

  const handleSubmit = async (event) => {
    console.log(trampasDeGoma);
    console.log(name);
  };

  const handleProductoSeleccionadoChange = (event, value) => {
    if (value) {
      let res = value.value;
      setProductoSeleccionado(res);
    } else {
      setProductoSeleccionado("");
    }
  };
  const handleProducto2SeleccionadoChange = (event, value) => {
    let res = value.value;
    if (value) {
      setProducto2Seleccionado(res);
    } else {
      setProducto2Seleccionado("");
    }
  };
  const handleProducto3SeleccionadoChange = (event, value) => {
    let res = value.value;

    if (value) {
      setProducto3Seleccionado(res);
    } else {
      setProducto3Seleccionado("");
    }
  };
  const handleProducto4SeleccionadoChange = (event, value) => {
    if (value) {
      let res = value.value;
      setProducto4Seleccionado(res);
    } else {
      setProducto4Seleccionado("");
    }
  };
  const handleProducto5SeleccionadoChange = (event, value) => {
    let res = value.value;

    if (value) {
      setProducto5Seleccionado(res);
    } else {
      setProducto5Seleccionado("");
    }
  };

  let [productoSeleccionado, setProductoSeleccionado] = useState("");
  let [producto2Seleccionado, setProducto2Seleccionado] = useState("");
  let [producto3Seleccionado, setProducto3Seleccionado] = useState("");
  let [producto4Seleccionado, setProducto4Seleccionado] = useState("");
  let [producto5Seleccionado, setProducto5Seleccionado] = useState("");

  let opcionesProductos = [
    {
      value: "AGITA 10 WG THIAMETOXAM RSCO-URB-INAC-102U-303-032-10",
      label: "AGITA 10 WG THIAMETOXAM RSCO-URB-INAC-102U-303-032-10",
    },
    {
      value: "AQUA RESLIN SUPER PERMETRINA RSCO-URB-MEZC-1153-301-013-11.020",
      label: "AQUA RESLIN SUPER PERMETRINA RSCO-URB-MEZC-1153-301-013-11.020",
    },
    {
      value: "BIOTHRINE C.E. 15 DELTAMETRINA RSCO-URB-INAC-119-317-009-1.6",
      label: "BIOTHRINE C.E. 15 DELTAMETRINA RSCO-URB-INAC-119-317-009-1.6",
    },
    {
      value: "BIOTRHINE FLOW DELTAMETRINA RSCO-URB-INAC-119-313-008-2.5",
      label: "BIOTRHINE FLOW DELTAMETRINA RSCO-URB-INAC-119-313-008-2.5",
    },
    {
      value: "BORIKOP ACIDO BORICO RSCO-INAC-195-0259-001-100",
      label: "BORIKOP ACIDO BORICO RSCO-INAC-195-0259-001-100",
    },
    {
      value: "CIRANO 20 CIPERMETRINA RSCO-URB-INAC-111-348-009-21.5",
      label: "CIRANO 20 CIPERMETRINA RSCO-URB-INAC-111-348-009-21.5",
    },
    {
      value: "CYNOFF 40 WP CIPERMETRINA RSCO-URB-INAC-111-00-02-40",
      label: "CYNOFF 40 WP CIPERMETRINA RSCO-URB-INAC-111-00-02-40",
    },
    {
      value: "CYNOFF CE CIPERMETRINA RSCO-URB-INAC-111-336-009-21.29",
      label: "CYNOFF CE CIPERMETRINA RSCO-URB-INAC-111-336-009-21.29",
    },
    {
      value: "DEMAN DUO LAMBDA CYHALOTRINA RSCO-URB-MEZC-1101D-X0006-085-15.10",
      label: "DEMAN DUO LAMBDA CYHALOTRINA RSCO-URB-MEZC-1101D-X0006-085-15.10",
    },
    {
      value: "DEMAND 2.5 CS LAMBDA CYHALOTRINA RSCO-URB-INAC-177-04-15-2.5",
      label: "DEMAND 2.5 CS LAMBDA CYHALOTRINA RSCO-URB-INAC-177-04-15-2.5",
    },
    {
      value: "DEMON 40PH CIPERMETRINA RSCO-URB-INAC-111-07-02-40",
      label: "DEMON 40PH CIPERMETRINA RSCO-URB-INAC-111-07-02-40",
    },
    {
      value: "ELEGY CIPERMETRINA RSCO-URB-INAC-111-352-009-22",
      label: "ELEGY CIPERMETRINA RSCO-URB-INAC-111-352-009-22",
    },
    {
      value: "FENDONA 6SC ALFACIPERMETRINA RSCO-DOM-INAC-107-308-064-06",
      label: "FENDONA 6SC ALFACIPERMETRINA RSCO-DOM-INAC-107-308-064-06",
    },
    {
      value: "MAXFORCE FLY BAYT IMIDACLOPRID RSCO-URB-INAC-199-327-349-0.5",
      label: "MAXFORCE FLY BAYT IMIDACLOPRID RSCO-URB-INAC-199-327-349-0.5",
    },
    {
      value: "MAXFORCE GEL IMIDACLOPRID RSCO-INAC-199-0174-382-2.15",
      label: "MAXFORCE GEL IMIDACLOPRID RSCO-INAC-199-0174-382-2.15",
    },
    {
      value: "OPTIGARD ANT THIAMETOXAM RSCO-URB-INAC-102U-307-092-0.010",
      label: "OPTIGARD ANT THIAMETOXAM RSCO-URB-INAC-102U-307-092-0.010",
    },
    {
      value:
        "OPTIGARD CUCARACHA BENZOATO DE EMAMECTINA RSCO-URB-INAC-0102M-0134-357-0.10",
      label:
        "OPTIGARD CUCARACHA BENZOATO DE EMAMECTINA RSCO-URB-INAC-0102M-0134-357-0.10",
    },
    {
      value: "OPTIGARD FLEX THIAMETOXAM RSCO-URB-INAC-102U-315-064-21",
      label: "OPTIGARD FLEX THIAMETOXAM RSCO-URB-INAC-102U-315-064-21",
    },
    {
      value: "PYBUTHRIN 33 PIRETRINAS RSCO-URB-INAC-185-315-304-0.38",
      label: "PYBUTHRIN 33 PIRETRINAS RSCO-URB-INAC-185-315-304-0.38",
    },
    {
      value: "PIRENAT PIRETRINAS RSCO-URB-INAC-185-363-304-0.40",
      label: "PIRENAT PIRETRINAS RSCO-URB-INAC-185-363-304-0.40",
    },
    {
      value: "PIRENONA 422N PIRETRINAS RSCO-URB-INAC-185-363-304-0.40",
      label: "PIRENONA 422N PIRETRINAS RSCO-URB-INAC-185-363-304-0.40",
    },
    {
      value: "ROACH KIL ACIDO ORTOBORICO RSCO-URB-INAC-195-303-001-99",
      label: "ROACH KIL ACIDO ORTOBORICO RSCO-URB-INAC-195-303-001-99",
    },
    {
      value: "SIEGE HIDRAMETILNONA RSCO-DOM-INAC-181-309-092-02",
      label: "SIEGE HIDRAMETILNONA RSCO-DOM-INAC-181-309-092-02",
    },
    {
      value: "STARYCIDE SC 480 TRIFLUMURON RSCO-URB-INAC-169-303-064-39.4",
      label: "STARYCIDE SC 480 TRIFLUMURON RSCO-URB-INAC-169-303-064-39.4",
    },
    {
      value: "TEMPRID SC IMIDACLOPRID RSCO-URB-MEZC-1101T-301-064-032",
      label: "TEMPRID SC IMIDACLOPRID RSCO-URB-MEZC-1101T-301-064-032",
    },
    {
      value: "TERMIDOR 25 CE FIPRONIL RSCO-URB-INAC-0101A-X0025-009-003",
      label: "TERMIDOR 25 CE FIPRONIL RSCO-URB-INAC-0101A-X0025-009-003",
    },
    {
      value: "X-TER BITE IMIDACLOPRID RSCO-URB-INAC-0199-X0003-005-0.50",
      label: "X-TER BITE IMIDACLOPRID RSCO-URB-INAC-0199-X0003-005-0.50",
    },
    {
      value: "ZAPPER WG IMIDACLOPRID RSCO-INAC-0199-X0145-0436-001",
      label: "ZAPPER WG IMIDACLOPRID RSCO-INAC-0199-X0145-0436-001",
    },
    {
      value: "WEATHERBLOK XT BRODIFACOUM RSCO-URB-RODE-501-320-033-0.005",
      label: "WEATHERBLOK XT BRODIFACOUM RSCO-URB-RODE-501-320-033-0.005",
    },
    {
      value: "STORM SECURE FLOCOUMAFEN RSCO-URB-RODE-506-306-033-0.005",
      label: "STORM SECURE FLOCOUMAFEN RSCO-URB-RODE-506-306-033-0.005",
    },
    {
      value: "RODENT CAKE DIFACINONA RSCO-DOM-RODE-503-301-033-0.005",
      label: "RODENT CAKE DIFACINONA RSCO-DOM-RODE-503-301-033-0.005",
    },
    {
      value: "RODILON BLOQUE DIFETIALONA RSCO-URB-RODE-516-00-07-0.0025",
      label: "RODILON BLOQUE DIFETIALONA RSCO-URB-RODE-516-00-07-0.0025",
    },
    {
      value: "RACUMIN PASTA COUMATETRALIL RSCO-URB-RODE-513-319-308-0.0375",
      label: "RACUMIN PASTA COUMATETRALIL RSCO-URB-RODE-513-319-308-0.0375",
    },
    {
      value: "FASTRAC BLOX BROMETALINA RSCO-URB-RODE-517-307-033-0.010",
      label: "FASTRAC BLOX BROMETALINA RSCO-URB-RODE-517-307-033-0.010",
    },
    {
      value: "CEREAL B BROMADIOLONA RSCO-URB-RODE-511-339-033-0.005",
      label: "CEREAL B BROMADIOLONA RSCO-URB-RODE-511-339-033-0.005",
    },
    {
      value: "CONTRAC BLOX BROMADIOLONA RSCO-URB-RODE-511-308-033-0.005",
      label: "CONTRAC BLOX BROMADIOLONA RSCO-URB-RODE-511-308-033-0.005",
    },
  ];

  const [name, setName] = useState("");
  const [planDeAccion, setPlanDeAccion] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [date, setDate] = useState("");
  const [telefono, setTelefono] = useState("");
  const [city, setCity] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [mail, setMail] = useState("");
  const [trampasDeGoma, setTrampasDeGoma] = useState(false);
  const [trampasMecanicas, setTrampasMecanicas] = useState(false);
  const [trampasDeJaula, setTrampasDeJaula] = useState(false);
  const [aplicacionDeGel, setAplicacionDeGel] = useState(false);
  const [cucaraHormiguicida, setCucaraHormiguicida] = useState(false);
  const [cebadero, setCebadero] = useState(false);
  const [aspersion, setAspersion] = useState(false);
  const [expulsores, setExpulsores] = useState(false);
  const [termoNebulizacion, setTermoNebulizacion] = useState(false);
  const [nebulizacionEnFrio, setNebulizacionEnFrio] = useState(false);
  const [cucarachas, setCucarachas] = useState(false);
  const [arañas, setArañas] = useState(false);
  const [chinches, setChinches] = useState(false);
  const [hormigas, setHormigas] = useState(false);
  const [moscas, setMoscas] = useState(false);
  const [garrapatas, setGarrapatas] = useState(false);
  const [alacranes, setAlacranes] = useState(false);
  const [termitas, setTermitas] = useState(false);
  const [roedores, setRoedores] = useState(false);
  const [inspeccionPro, setInspeccionPro] = useState(false);
  const [manejoPlagas, setManejoPlagas] = useState(false);
  const [monitoreo, setMonitoreo] = useState(false);
  const [desinfeccion, setDesinfeccion] = useState(false);
  const [servicioTrampas, setServicioTrampas] = useState(false);
  const [manejoResiduos, setManejoResiduos] = useState(false);
  const [accionesCorrectivas, setAccionesCorrectivas] = useState(false);
  const [profesionalResponsable, setProfesionalResponsable] = useState("");
  const [superficie, setSuperficie] = useState("");
  const [presupuestoGeneral, setPresupuestoGeneral] = useState("");
  const [anticipo, setAnticipo] = useState("");
  const [resto, setResto] = useState("");
  const [firmaDelCliente, setFirmaDelCliente] = useState("");
  const [otros, setOtros] = useState("");

  //Aqui con esta url estamos guardando los datos }
  //Ojo esta es la url que tenemos que mandar para la base de datos para poder descargar
  const handlePdf = async (event) => {
    try {
      console.log(trampasDeGoma);
      console.log(name);
      console.log(name);
      const url =
        "https://res.cloudinary.com/dpz2wx43s/image/upload/v1719374439/cesarfiles/jmf1sv9aqoiwyz5gnixw.pdf";
      const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const { width, height } = firstPage.getSize();
      //traer la info de la bd

      firstPage.drawText(profesionalResponsable, {
        x: 435,
        y: 730,
        size: 10,
        font: helveticaFont,
      });

      firstPage.drawText(name, {
        x: 100,
        y: 678,
        size: 10,
        font: helveticaFont,
      });

      firstPage.drawText(domicilio, {
        x: 100,
        y: 658,
        size: 10,
        font: helveticaFont,
      });

      firstPage.drawText(date, {
        x: 518,
        y: 668,
        size: 10,
        font: helveticaFont,
      });

      firstPage.drawText(telefono, {
        x: 100,
        y: 634,
        size: 10,
        font: helveticaFont,
      });
      firstPage.drawText(city, {
        x: 250,
        y: 634,
        size: 10,
        font: helveticaFont,
      });
      firstPage.drawText(mail, {
        x: 100,
        y: 614,
        size: 10,
        font: helveticaFont,
      });
      firstPage.drawText(planDeAccion, {
        x: 110,
        y: 223,
        size: 10,
        font: helveticaFont,
      });

      //tipo de servicio checkboxes

      if (inspeccionPro) {
        firstPage.drawText("X", {
          x: 43,
          y: 559,
          size: 10,
          font: helveticaFont,
        });
      }

      if (manejoPlagas) {
        firstPage.drawText("X", {
          x: 123,
          y: 559,
          size: 10,
          font: helveticaFont,
        });
      }

      if (monitoreo) {
        firstPage.drawText("X", {
          x: 198,
          y: 559,
          size: 10,
          font: helveticaFont,
        });
      }

      if (desinfeccion) {
        firstPage.drawText("X", {
          x: 278,
          y: 559,
          size: 10,
          font: helveticaFont,
        });
      }

      if (servicioTrampas) {
        firstPage.drawText("X", {
          x: 357,
          y: 559,
          size: 10,
          font: helveticaFont,
        });
      }

      if (manejoResiduos) {
        firstPage.drawText("X", {
          x: 435,
          y: 559,
          size: 10,
          font: helveticaFont,
        });
      }

      if (accionesCorrectivas) {
        firstPage.drawText("X", {
          x: 513,
          y: 559,
          size: 10,
          font: helveticaFont,
        });
      }

      // CheckBox

      if (trampasDeGoma) {
        firstPage.drawText("X", {
          x: 120,
          y: 450,
          size: 10,
          font: helveticaFont,
        });
      } else if (!trampasDeGoma) {
        firstPage.drawText("X", {
          x: 143,
          y: 450,
          size: 10,
          font: helveticaFont,
        });
      }

      if (cebadero) {
        firstPage.drawText("X", {
          x: 243,
          y: 450,
          size: 10,
          font: helveticaFont,
        });
      } else if (!cebadero) {
        firstPage.drawText("X", {
          x: 266,
          y: 450,
          size: 10,
          font: helveticaFont,
        });
      }

      //fila 2
      if (trampasMecanicas) {
        firstPage.drawText("X", {
          x: 120,
          y: 418,
          size: 10,
          font: helveticaFont,
        });
      } else if (!trampasMecanicas) {
        firstPage.drawText("X", {
          x: 143,
          y: 418,
          size: 10,
          font: helveticaFont,
        });
      }

      if (expulsores) {
        firstPage.drawText("X", {
          x: 243,
          y: 418,
          size: 10,
          font: helveticaFont,
        });
      } else if (!expulsores) {
        firstPage.drawText("X", {
          x: 266,
          y: 418,
          size: 10,
          font: helveticaFont,
        });
      }

      if (trampasDeJaula) {
        firstPage.drawText("X", {
          x: 120,
          y: 384,
          size: 10,
          font: helveticaFont,
        });
      } else if (!trampasDeJaula) {
        firstPage.drawText("X", {
          x: 143,
          y: 384,
          size: 10,
          font: helveticaFont,
        });
      }

      if (aspersion) {
        firstPage.drawText("X", {
          x: 243,
          y: 384,
          size: 10,
          font: helveticaFont,
        });
      } else if (!aspersion) {
        firstPage.drawText("X", {
          x: 266,
          y: 384,
          size: 10,
          font: helveticaFont,
        });
      }
      if (aplicacionDeGel) {
        firstPage.drawText("X", {
          x: 120,
          y: 353,
          size: 10,
          font: helveticaFont,
        });
      } else if (!aplicacionDeGel) {
        firstPage.drawText("X", {
          x: 143,
          y: 353,
          size: 10,
          font: helveticaFont,
        });
      }
      if (termoNebulizacion) {
        firstPage.drawText("X", {
          x: 243,
          y: 353,
          size: 10,
          font: helveticaFont,
        });
      } else if (!termoNebulizacion) {
        firstPage.drawText("X", {
          x: 266,
          y: 353,
          size: 10,
          font: helveticaFont,
        });
      }

      //fil4

      if (cucaraHormiguicida) {
        firstPage.drawText("X", {
          x: 120,
          y: 318,
          size: 10,
          font: helveticaFont,
        });
      } else if (!cucaraHormiguicida) {
        firstPage.drawText("X", {
          x: 143,
          y: 318,
          size: 10,
          font: helveticaFont,
        });
      }

      if (nebulizacionEnFrio) {
        firstPage.drawText("X", {
          x: 243,
          y: 318,
          size: 10,
          font: helveticaFont,
        });
      } else if (!nebulizacionEnFrio) {
        firstPage.drawText("X", {
          x: 266,
          y: 318,
          size: 10,
          font: helveticaFont,
        });
      }

      //otros
      firstPage.drawText("cacacqa", {
        x: 92,
        y: 287,
        size: 10,
        font: helveticaFont,
      });
      //Plagas

      if (cucarachas) {
        firstPage.drawText("X", {
          x: 430,
          y: 462,
          size: 10,
          font: helveticaFont,
        });
      }
      if (garrapatas) {
        firstPage.drawText("X", {
          x: 561,
          y: 462,
          size: 10,
          font: helveticaFont,
        });
      }
      if (arañas) {
        firstPage.drawText("X", {
          x: 430,
          y: 420,
          size: 10,
          font: helveticaFont,
        });
      }
      if (alacranes) {
        firstPage.drawText("X", {
          x: 561,
          y: 420,
          size: 10,
          font: helveticaFont,
        });
      }
      if (chinches) {
        firstPage.drawText("X", {
          x: 430,
          y: 378,
          size: 10,
          font: helveticaFont,
        });
      }
      if (termitas) {
        firstPage.drawText("X", {
          x: 561,
          y: 378,
          size: 10,
          font: helveticaFont,
        });
      }
      if (hormigas) {
        firstPage.drawText("X", {
          x: 430,
          y: 336,
          size: 10,
          font: helveticaFont,
        });
      }
      if (roedores) {
        firstPage.drawText("X", {
          x: 561,
          y: 336,
          size: 10,
          font: helveticaFont,
        });
      }
      if (moscas) {
        firstPage.drawText("X", {
          x: 430,
          y: 294,
          size: 10,
          font: helveticaFont,
        });
      }

      firstPage.drawText(superficie, {
        x: 377,
        y: 216,
        size: 10,
        font: helveticaFont,
      });

      firstPage.drawText(productoSeleccionado, {
        x: 455,
        y: 225,
        size: 10,
        font: helveticaFont,
      });

      firstPage.drawText(producto2Seleccionado, {
        x: 455,
        y: 212,
        size: 10,
        font: helveticaFont,
      });

      firstPage.drawText(producto3Seleccionado, {
        x: 455,
        y: 200,
        size: 10,
        font: helveticaFont,
      });

      firstPage.drawText(producto4Seleccionado, {
        x: 455,
        y: 187,
        size: 10,
        font: helveticaFont,
      });

      firstPage.drawText(producto5Seleccionado, {
        x: 455,
        y: 175,
        size: 10,
        font: helveticaFont,
      });

      //Precios
      firstPage.drawText(presupuestoGeneral, {
        x: 365,
        y: 120,
        size: 15,
        font: helveticaFont,
      });

      firstPage.drawText(anticipo, {
        x: 350,
        y: 83,
        size: 10,
        font: helveticaFont,
      });
      firstPage.drawText(resto, {
        x: 465,
        y: 83,
        size: 10,
        font: helveticaFont,
      });
      firstPage.drawText(firmaDelCliente, {
        x: 430,
        y: 50,
        size: 15,
        font: helveticaFont,
      });

      const pdfBytes = await pdfDoc.save();
      setGeneratedPdf(pdfBytes); // Guarda los bytes del PDF generado en el estado local
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
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
          Agregar Orden Sencilla
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form className="containerAgregarClientesFondo">
          <Grid
            container
            direction={"row"}
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid item>
              <Grid
                container
                direction={"row"}
                spacing={2}
                display={"flex"}
                justifyContent={"center"}
              >
                <Grid item xs={12} lg={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <h1
                      style={{
                        margin: "5px",
                      }}
                    >
                      Coca cola
                    </h1>
                    <h2
                      style={{
                        margin: "0px",
                      }}
                    >
                      Poniente
                    </h2>
                  </div>
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
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                  <Grid
                    container
                    spacing={2}
                    direction={"row"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <h2 className="form-subtitle">DATOS DEL CLIENTE</h2>

                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        fullWidth
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="date"
                        name="fecha"
                        placeholder="Fecha"
                        fullWidth
                        value={date}
                        onChange={(event) => {
                          setDate(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="domicilio"
                        placeholder="Domicilio"
                        fullWidth
                        value={domicilio}
                        onChange={(event) => {
                          setDomicilio(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="presupuestoGeneral"
                        placeholder="Presupuesto General"
                        fullWidth
                        value={profesionalResponsable}
                        onChange={(event) => {
                          setProfesionalResponsable(event.target.value);
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="telefono"
                        placeholder="Telefono"
                        fullWidth
                        value={telefono}
                        onChange={(event) => {
                          setTelefono(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="city"
                        placeholder="Ciudad"
                        fullWidth
                        value={city}
                        onChange={(event) => {
                          setCity(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="orderNumber"
                        placeholder="Numero de Orden"
                        fullWidth
                        value={orderNumber}
                        onChange={(event) => {
                          setOrderNumber(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="mail"
                        placeholder="Correo"
                        fullWidth
                        value={mail}
                        onChange={(event) => {
                          setMail(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="planDeAccion"
                        placeholder="Plan De Accion"
                        fullWidth
                        value={planDeAccion}
                        onChange={(event) => {
                          setPlanDeAccion(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="superficie"
                        placeholder="Superficie"
                        fullWidth
                        value={superficie}
                        onChange={(event) => {
                          setSuperficie(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="presupuestoGeneral"
                        placeholder="Presupuesto General"
                        fullWidth
                        value={presupuestoGeneral}
                        onChange={(event) => {
                          setPresupuestoGeneral(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="anticipo"
                        placeholder="Anticipo"
                        fullWidth
                        value={anticipo}
                        onChange={(event) => {
                          setAnticipo(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="resto"
                        placeholder="resto"
                        fullWidth
                        value={resto}
                        onChange={(event) => {
                          setResto(event.target.value);
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="firmaDelCliente"
                        placeholder="Firma Del Cliente"
                        fullWidth
                        value={firmaDelCliente}
                        onChange={(event) => {
                          setFirmaDelCliente(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        type="text"
                        name="otros"
                        placeholder="Otros"
                        fullWidth
                        value={otros}
                        onChange={(event) => {
                          setOtros(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}></Grid>

                    <h2 className="form-subtitle">TIPO DE SERVICIO</h2>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Inspección Profesional
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setInspeccionPro(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setInspeccionPro(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Manejo Integral de Plagas
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setManejoPlagas(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setManejoPlagas(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Monitoreo Programado
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setMonitoreo(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setMonitoreo(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Desinfección y Planificación
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setDesinfeccion(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            control={<Radio />}
                            onChange={() => {
                              setDesinfeccion(false);
                            }}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Servicio a Trampas de Grasa
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setServicioTrampas(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setServicioTrampas(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Manejo de Residuos Especiales
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setManejoResiduos(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setManejoResiduos(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Acciones Correctivas y Preventivas
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setAccionesCorrectivas(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setAccionesCorrectivas(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={3}></Grid>

                    <h2 className="form-subtitle">SISTEMAS DE APLICACIÓN</h2>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Trampas De Goma
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setTrampasDeGoma(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setTrampasDeGoma(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Trampas Mecánicas
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setTrampasMecanicas(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setTrampasMecanicas(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Trampas De Jaula
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setTrampasDeJaula(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setTrampasDeJaula(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Aplicaición De Gel
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setAplicacionDeGel(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            control={<Radio />}
                            onChange={() => {
                              setAplicacionDeGel(false);
                            }}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Cucarachicida y Hormiguicida
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setCucaraHormiguicida(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setCucaraHormiguicida(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">Cebadero</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setCebadero(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setCebadero(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Expulsores en Aerosol
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setExpulsores(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setExpulsores(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Aspersion Focalizada
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setAspersion(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setAspersion(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Termo Nebulización
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setTermoNebulizacion(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setTermoNebulizacion(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">
                          Nebulización en frío
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setNebulizacionEnFrio(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setNebulizacionEnFrio(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={6}></Grid>

                    <h2 className="form-subtitle">PLAGAS DETECTADAS</h2>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">Cucarachas</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setCucarachas(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setCucarachas(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">Arañas</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setArañas(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setArañas(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">Chinches</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setChinches(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setChinches(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">Hormigas</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setHormigas(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setHormigas(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">Moscas</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setMoscas(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setMoscas(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">Garrapatas</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setGarrapatas(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setGarrapatas(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">Alacranes</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setAlacranes(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setAlacranes(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">Termitas</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setTermitas(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setTermitas(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                      <FormControl className="formLabel">
                        <FormLabel component="legend">Roedores</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Si"
                            onChange={() => {
                              setRoedores(true);
                            }}
                            control={<Radio />}
                            label="SI"
                          />
                          <FormControlLabel
                            value="No"
                            onChange={() => {
                              setRoedores(false);
                            }}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={3}></Grid>
                    <Grid item xs={12} lg={3}></Grid>
                    <Grid item xs={12} lg={3}></Grid>

                    <h2 className="form-subtitle">MATERIALES A UTILIZAR</h2>
                    <Grid item xs={12} lg={9}></Grid>
                    <Grid item xs={12} lg={6}>
                      <Box sx={{ width: "100%" }}>
                        <Autocomplete
                          id="opcionesProducto"
                          options={opcionesProductos}
                          autoHighlight
                          fullWidth
                          getOptionLabel={(option) => option.label}
                          getOptionSelected={(option, value) =>
                            option.value === value.value
                          }
                          value={opcionesProductos.find(
                            (option) => option.value === productoSeleccionado
                          )}
                          renderInput={(params) => (
                            <TextField {...params} label="Productos" />
                          )}
                          renderOption={(props, option) => (
                            <li {...props}>
                             
                              <span
                                style={{
                                  color: "black",
                                }}
                              >
                                {option.value}
                              </span>
                            </li>
                          )}
                          onChange={handleProductoSeleccionadoChange}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Box sx={{ width: "100%" }}>
                        <Autocomplete
                          id="opcionesProducto"
                          options={opcionesProductos}
                          autoHighlight
                          fullWidth
                          getOptionLabel={(option) => option.label}
                          getOptionSelected={(option, value) =>
                            option.value === value.value
                          }
                          value={opcionesProductos.find(
                            (option) => option.value === producto2Seleccionado
                          )}
                          renderInput={(params) => (
                            <TextField {...params} label="Productos" />
                          )}
                          renderOption={(props, option) => (
                            <li {...props}>
                             
                              <span
                                style={{
                                  color: "black",
                                }}
                              >
                                {option.value}
                              </span>
                            </li>
                          )}
                          onChange={handleProducto2SeleccionadoChange}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Box sx={{ width: "100%" }}>
                        <Autocomplete
                          id="opcionesProducto"
                          options={opcionesProductos}
                          autoHighlight
                          fullWidth
                          getOptionLabel={(option) => option.label}
                          getOptionSelected={(option, value) =>
                            option.value === value.value
                          }
                          value={opcionesProductos.find(
                            (option) => option.value === producto3Seleccionado
                          )}
                          renderInput={(params) => (
                            <TextField {...params} label="Productos" />
                          )}
                          renderOption={(props, option) => (
                            <li {...props}>
                              
                              <span
                                style={{
                                  color: "black",
                                }}
                              >
                                {option.value}
                              </span>
                            </li>
                          )}
                          onChange={handleProducto3SeleccionadoChange}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Box sx={{ width: "100%" }}>
                        <Autocomplete
                          id="opcionesProducto"
                          options={opcionesProductos}
                          autoHighlight
                          fullWidth
                          getOptionLabel={(option) => option.label}
                          getOptionSelected={(option, value) =>
                            option.value === value.value
                          }
                          value={opcionesProductos.find(
                            (option) => option.value === producto4Seleccionado
                          )}
                          renderInput={(params) => (
                            <TextField {...params} label="Productos" />
                          )}
                          renderOption={(props, option) => (
                            <li {...props}>
                             
                              <span
                                style={{
                                  color: "black",
                                }}
                              >
                                {option.value}
                              </span>
                            </li>
                          )}
                          onChange={handleProducto4SeleccionadoChange}
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <Box sx={{ width: "100%" }}>
                        <Autocomplete
                          id="opcionesProducto"
                          options={opcionesProductos}
                          autoHighlight
                          fullWidth
                          getOptionLabel={(option) => option.label}
                          getOptionSelected={(option, value) =>
                            option.value === value.value
                          }
                          value={opcionesProductos.find(
                            (option) => option.value === producto5Seleccionado
                          )}
                          renderInput={(params) => (
                            <TextField {...params} label="Productos" />
                          )}
                          renderOption={(props, option) => (
                            <li {...props}>
                           
                              <span
                                style={{
                                  color: "black",
                                }}
                              >
                                {option.value}
                              </span>
                            </li>
                          )}
                          onChange={handleProducto5SeleccionadoChange}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}></Grid>
                  </Grid>
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
                  <p
                    style={{
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    AGREGAR
                  </p>
                </ColorButton>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              maxHeight={50}
            ></Grid>
          </Grid>
          {/* Agregar un enlace para descargar el PDF */}
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {generatedPdf && (
          <a
            href={URL.createObjectURL(
              new Blob([generatedPdf], { type: "application/pdf" })
            )}
            download="Orden De Servicio Sencilla.pdf"
          >
            Descargar PDF
          </a>
        )}
      </div>
    </>
  );
}
