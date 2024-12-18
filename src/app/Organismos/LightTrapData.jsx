import React from "react";
import { Grid, TextField, Button, FormControlLabel, Checkbox, FormLabel } from "@mui/material";
import { styled } from "@mui/system";

export default function LightTrapData({ lightTrapData, setLightTrapData }) {
    const AddButton = styled(Button)(({ theme }) => ({
        color: "#10754a",
        backgroundColor: "#f9fade",
        "&:hover": {
            color: "black",
            backgroundColor: "#D6D6D6",
        },
    }));

    const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
        '&.Mui-checked': {
            color: '#10754a',
        },
    }));

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newData = [...lightTrapData];
        if (name.startsWith("cantidad")) {
            const key = name.replace("cantidad", "").toLowerCase();
            newData[index].cantidadPlaga[key] = value;
        } else {
            newData[index][name] = value;
        }
        setLightTrapData(newData);
    };

    const handleCheckboxChange = (index, category, key) => {
        const newData = [...lightTrapData];
        newData[index][category][key] = !newData[index][category][key];
        setLightTrapData(newData);
    };

    const handleAddLightTrap = () => {
        setLightTrapData([
            ...lightTrapData,
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
    };

    const handleRemoveLightTrap = () => {
        if (lightTrapData.length > 1) {
            const newData = [...lightTrapData.slice(0, lightTrapData.length - 1)];
            setLightTrapData(newData);
        }
    };

    const cantidadPlagaLabels = [
        { key: "mm", label: "Mosca metálica" },
        { key: "mc", label: "Mosca de carne" },
        { key: "md", label: "Mosca doméstica" },
        { key: "mj", label: "Mosca jorobada" },
        { key: "mf", label: "Mosca de la fruta" },
        { key: "mp", label: "Mosca palomilla" },
        { key: "za", label: "Zancudo o mosquito" },
        { key: "mn", label: "Mariposa nocturna" },
        { key: "ab", label: "Abeja" },
        { key: "ot1", label: "Otro 1" },
        { key: "ot2", label: "Otro 2" },
        { key: "ot3", label: "Otro 3" },
    ];

    return (
        <>
            {lightTrapData.map((lightTrap, index) => (
                <div key={index}>
                    <h4>Reporte Trampa de Luz {index + 1}</h4>
                    <Grid container spacing={2} style={{ marginLeft: "0em" }}>
                        <Grid item xs={12} lg={6}>
                            <TextField
                                type="number"
                                name="noReporte"
                                label="No."
                                fullWidth
                                value={lightTrap.noReporte}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <TextField
                                type="text"
                                name="ubicacionEquipo"
                                label="Ubicación del equipo"
                                fullWidth
                                value={lightTrap.ubicacionEquipo}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </Grid>

                        <Grid item xs={12} lg={12}>
                            <FormLabel component="legend">Acción por Zego</FormLabel>
                        </Grid>

                        {[
                            { key: "cp", label: "Cambio de plantilla" },
                            { key: "ld", label: "Limpieza de dispositivo" },
                            { key: "id", label: "Instalación de dispositivo" },
                            { key: "cf", label: "Cambio de foco" },
                        ].map(({ key, label }) => (
                            <Grid item lg={4} key={key}>
                                <FormControlLabel
                                    control={
                                        <CustomCheckbox
                                            checked={lightTrap.accionRentokil[key]}
                                            onChange={() => handleCheckboxChange(index, "accionRentokil", key)}
                                            color="primary"
                                        />
                                    }
                                    label={label}
                                />
                            </Grid>
                        ))}

                        <Grid item xs={12} lg={12}>
                            <FormLabel component="legend">Acción correctiva por el Cliente</FormLabel>
                        </Grid>

                        {[
                            { key: "la", label: "Limpieza de área" },
                            { key: "da", label: "Dispositivo adicional" },
                            { key: "ca", label: "Cerrar acceso" },
                            { key: "lo", label: "Liberar obstrucción" },
                            { key: "otC", label: "Otros" },
                            { key: "nn", label: "Ninguna" },
                        ].map(({ key, label }) => (
                            <Grid item lg={4} key={key}>
                                <FormControlLabel
                                    control={
                                        <CustomCheckbox
                                            checked={lightTrap.accionCliente[key]}
                                            onChange={() => handleCheckboxChange(index, "accionCliente", key)}
                                            color="primary"
                                        />
                                    }
                                    label={label}
                                />
                            </Grid>
                        ))}

                        <Grid item xs={12} lg={12}>
                            <FormLabel component="legend">Condición del equipo</FormLabel>
                        </Grid>

                        {[
                            { key: "bn", label: "Bien" },
                            { key: "ob", label: "Obstruida" },
                            { key: "ne", label: "No encontrado" },
                            { key: "rc", label: "Requiere cambio" },
                            { key: "otE", label: "Otros" },
                        ].map(({ key, label }) => (
                            <Grid item lg={4} key={key}>
                                <FormControlLabel
                                    control={
                                        <CustomCheckbox
                                            checked={lightTrap.condicionEquipo[key]}
                                            onChange={() => handleCheckboxChange(index, "condicionEquipo", key)}
                                            color="primary"
                                        />
                                    }
                                    label={label}
                                />
                            </Grid>
                        ))}

                        <Grid item xs={12} lg={12}>
                            <FormLabel component="legend">Cantidad de plaga encontrada</FormLabel>
                        </Grid>

                        <Grid container xs={12} lg={12} spacing={2} style={{ marginTop: "1%" }}>
                            {cantidadPlagaLabels.map(({ key, label }) => (
                                <Grid item xs={12} lg={3} key={key}>
                                    <TextField
                                        type="number"
                                        name={`cantidad${key.charAt(0).toUpperCase() + key.slice(1)}`}
                                        label={`Cantidad de ${label}`}
                                        fullWidth
                                        value={lightTrap.cantidadPlaga[key]}
                                        onChange={(event) => handleInputChange(index, event)}
                                    />
                                </Grid>
                            ))}
                        </Grid>

                        <Grid item xs={12} lg={11.5}>
                            <TextField
                                type="text"
                                name="comentarios"
                                label="Comentarios y observaciones"
                                fullWidth
                                value={lightTrap.comentarios}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </Grid>
                    </Grid>
                </div>
            ))}
            {lightTrapData.length > 1 && (
                <Button
                    variant="contained"
                    onClick={handleRemoveLightTrap}
                    style={{ marginTop: "1%", marginRight: "1%" }}
                >
                    Cancelar Reporte {lightTrapData.length}
                </Button>
            )}
            {lightTrapData.length < 16 && (
                <AddButton
                    variant="contained"
                    onClick={handleAddLightTrap}
                    style={{ marginTop: "1%" }}
                >
                    Agregar otro reporte
                </AddButton>
            )}
        </>
    );
}
