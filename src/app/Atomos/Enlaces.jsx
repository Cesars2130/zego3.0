import React from "react";


import { Button, Grid } from "@mui/material";

export default function Enlaces(page) {
  return (
    <Grid item xs={12} lg={2}>
      <Button sx={{ my: 2, color: "white", display:"flex"}} href={page.href}>
        {page.nombrePage}
      </Button>
    </Grid>
  );
}
