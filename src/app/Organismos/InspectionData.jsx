import React from "react";
import { Grid, TextField, Button, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel } from "@mui/material";
import { styled } from "@mui/system";

export default function InspectionData({ inspectionData, setInspectionData }) {    
    const AddButton = styled(Button)(({ theme }) => ({
        color: "#10754a",
        backgroundColor: "#f9fade",
        "&:hover": {
            color: "black",
            backgroundColor: "#D6D6D6",
        },
    }));

    const InspectionHeader = styled("h4")(({ theme }) => ({
        width: "90%",
    }));

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newData = [...inspectionData];
        newData[index][name] = value;
        setInspectionData(newData);
    };

    const handleAddInspection = () => {
        setInspectionData([...inspectionData, {
            area: "",
            infestacionActiva: null,
            plagaEncontrada: "",
            condicionesHigiene: null,
            correctivaRentokil: null,
            correctivaCliente: null,
            correccionRequerida: "",
        }]);
    };

    const handleRemoveInspection = () => {
        if (inspectionData.length > 1) {
            const newData = [...inspectionData.slice(0, inspectionData.length - 1)];
            setInspectionData(newData);
        }
    };
    

    return (
        <>
            {inspectionData.map((inspection, index) => (
                <>
                    <InspectionHeader>Inspección {index + 1}</InspectionHeader>
                    <Grid
                        container
                        spacing={2}
                        key={index}
                        style={{ marginLeft: "0em" }}
                    >
                        <Grid item xs={12} lg={6}>
                            <TextField
                                type="text"
                                name="area"
                                label="Área"
                                fullWidth
                                value={inspection.area}
                                onChange={(event) =>
                                    handleInputChange(index, event)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <FormControl className="formLabel">
                                <FormLabel component="legend">
                                    Infestación activa encontrada
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={inspection.infestacionActiva === null ? "" : (inspection.infestacionActiva ? "Si" : "No")}
                                    onChange={(event) => {
                                        handleInputChange(index, { target: { name: "infestacionActiva", value: event.target.value === "Si" ? true : false } });
                                    }}
                                >
                                    <FormControlLabel
                                        value="Si"
                                        control={<Radio />}
                                        label="SI"
                                    />
                                    <FormControlLabel
                                        value="No"
                                        control={<Radio />}
                                        label="No"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <TextField
                                type="text"
                                name="plagaEncontrada"
                                label="Plaga encontrada"
                                fullWidth
                                value={inspection.plagaEncontrada}
                                onChange={(event) =>
                                    handleInputChange(index, event)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} lg={3}>
                            <FormControl className="formLabel">
                                <FormLabel component="legend">
                                    Condiciones de higiene satisfactorias
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={inspection.condicionesHigiene === null ? "" : (inspection.condicionesHigiene ? "Si" : "No")}
                                    onChange={(event) => {
                                        handleInputChange(index, { target: { name: "condicionesHigiene", value: event.target.value === "Si" ? true : false } });
                                    }}
                                >
                                    <FormControlLabel
                                        value="Si"
                                        control={<Radio />}
                                        label="SI"
                                    />
                                    <FormControlLabel
                                        value="No"
                                        control={<Radio />}
                                        label="No"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={3}>
                            <FormControl className="formLabel">
                                <FormLabel component="legend">
                                    Requiere acciones correctivas
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name={`row-radio-buttons-group-${index}`}
                                    value={
                                        inspection.correctivaRentokil === null && inspection.correctivaCliente === null
                                            ? ""
                                            : inspection.correctivaRentokil
                                                ? "correctivaRentokil"
                                                : "correctivaCliente"
                                    }
                                    onChange={(event) => {
                                        const { value } = event.target;
                                        const newData = [...inspectionData];
                                        newData[index] = {
                                            ...newData[index],
                                            correctivaRentokil: value === "correctivaRentokil" ? true : false,
                                            correctivaCliente: value === "correctivaCliente" ? true : false,
                                        };
                                        setInspectionData(newData);
                                    }}
                                >
                                    <FormControlLabel
                                        value="correctivaRentokil"
                                        control={<Radio />}
                                        label="Por Zego"
                                    />
                                    <FormControlLabel
                                        value="correctivaCliente"
                                        control={<Radio />}
                                        label="Por el cliente"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={12}>
                            <TextField
                                type="text"
                                name="correccionRequerida"
                                label="Corrección activa requerida"
                                fullWidth
                                value={inspection.correccionRequerida}
                                onChange={(event) =>
                                    handleInputChange(index, event)
                                }
                            />
                        </Grid>
                    </Grid>
                </>
            ))}

            {inspectionData.length > 1 && (
                <Button
                    variant="contained"
                    onClick={handleRemoveInspection}
                    style={{ marginTop: "1%", marginRight: "1%" }}
                >
                    Cancelar Inspección {inspectionData.length}
                </Button>
            )}

            {inspectionData.length < 15 && (
                <AddButton
                    variant="contained"
                    onClick={handleAddInspection}
                    style={{ marginTop: "1%" }}
                >
                    Agregar otra inspección
                </AddButton>
            )}
        </>
    );
}
