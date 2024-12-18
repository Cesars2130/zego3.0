import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

export default function PlaguesData({ plagueData, setPlagueData }) {    
    const AddButton = styled(Button)(({ theme }) => ({
        color: "#10754a",
        backgroundColor: "#f9fade",
        "&:hover": {
            color: "black",
            backgroundColor: "#D6D6D6",
        },
    }));

    const PlagueHeader = styled("h4")(({ theme }) => ({
        width: "90%",
    }));

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newData = [...plagueData];
        newData[index][name] = value;
        setPlagueData(newData);
    };

    const handleAddPlague = () => {
        setPlagueData([...plagueData, {
            codigoArea: "",
            codigoPlaga: "",
        }]);
    };

    const handleRemovePlague = () => {
        if (plagueData.length > 1) {
            const newData = [...plagueData.slice(0, plagueData.length - 1)];
            setPlagueData(newData);
        }
    };
    

    return (
        <>
            {plagueData.map((plague, index) => (
                <>
                <PlagueHeader>Plaga {index + 1}</PlagueHeader>
                <Grid container spacing={2} key={index} style={{marginLeft:"0em"}} >
                    <Grid item xs={12} lg={6}>
                        <TextField
                            type="text"     
                            name="codigoArea"
                            label="Código de Área"
                            fullWidth
                            value={plague.codigoArea}
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            type="text"
                            name="codigoPlaga"
                            label="Código de Plaga"
                            fullWidth
                            value={plague.codigoPlaga}
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                        />
                    </Grid>
                </Grid>
                </>
            ))}

            {plagueData.length > 1 && (
                <Button
                    variant="contained"
                    onClick={handleRemovePlague}
                    style={{ marginTop: "1%", marginRight: "1%" }}
                >
                    Cancelar plaga {plagueData.length}
                </Button>
            )}

            {plagueData.length < 4 && (
                <AddButton
                    variant="contained"
                    onClick={handleAddPlague}
                    style={{ marginTop: "1%" }}
                >
                    Agregar otra plaga
                </AddButton>
            )}
        </>
    );
}