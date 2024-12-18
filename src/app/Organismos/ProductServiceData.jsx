import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

export default function ProductServiceData({ productData, setProductData }) {    
    const AddButton = styled(Button)(({ theme }) => ({
        color: "#10754a",
        backgroundColor: "#f9fade",
        "&:hover": {
            color: "black",
            backgroundColor: "#D6D6D6",
        },
    }));

    const ProductHeader = styled("h4")(({ theme }) => ({
        width: "90%",
    }));

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newData = [...productData];
        newData[index][name] = value;
        setProductData(newData);
    };

    const handleAddProduct = () => {
        setProductData([...productData, {
            nombreProducto: "",
            plagas: "",
            areas: "",
            metodoUtilizado: "",
            equipoUtilizado: "",
            dosis: "",
            mezclaPreparada: "",
            areaMetros: ""
        }]);
    };

    const handleRemoveProduct = () => {
        if (productData.length > 1) {
            const newData = [...productData.slice(0, productData.length - 1)];
            setProductData(newData);
        }
    };
    

    return (
        <>
            {productData.map((product, index) => (
                <>
                <ProductHeader>Producto {index + 1}</ProductHeader>
                <Grid container spacing={2} key={index} style={{marginLeft:"0em"}} >
                    <Grid item xs={12} lg={6}>
                        <TextField
                            type="text"     
                            name="nombreProducto"
                            label="Nombre del Producto"
                            fullWidth
                            value={product.nombreProducto}
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            type="text"
                            name="plagas"
                            label="Plagas a Controlar"
                            fullWidth
                            value={product.plagas}
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            type="text"
                            name="areas"
                            label="Areas Tratadas"
                            fullWidth
                            value={product.areas}
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            type="text"
                            name="metodoUtilizado"
                            label="Método Utilizado"
                            fullWidth
                            value={product.metodoUtilizado}
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            type="text"
                            name="equipoUtilizado"
                            label="Equipo Utilizado"
                            fullWidth
                            value={product.equipoUtilizado}
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            type="text"
                            name="dosis"
                            label="Dosis"
                            fullWidth
                            value={product.dosis}
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            type="text"
                            name="mezclaPreparada"
                            label="Mezcla Preparada"
                            fullWidth
                            value={product.mezclaPreparada}
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            type="text"
                            name="areaMetros"
                            label="Area tratada. m lineal/m2/m3"
                            fullWidth
                            value={product.areaMetros}
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                        />
                    </Grid>
                </Grid>
                </>
            ))}

            {productData.length > 1 && (
                <Button
                    variant="contained"
                    onClick={handleRemoveProduct}
                    style={{ marginTop: "1%", marginRight: "1%" }}
                >
                    Cancelar Producto {productData.length}
                </Button>
            )}

            {productData.length < 7 && (
                <AddButton
                    variant="contained"
                    onClick={handleAddProduct}
                    style={{ marginTop: "1%" }}
                >
                    Agregar otro producto
                </AddButton>
            )}
        </>
    );
}