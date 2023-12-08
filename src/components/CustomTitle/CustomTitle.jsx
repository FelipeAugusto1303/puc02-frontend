import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledTitle } from "./CustomTitle.style";

function CustomTitle() {
  return (
    <Box
      component="div"
      sx={{ display: "flex", alignItems: "center", gap: "2px" }}
    >
      <StyledTitle sx={{ color: "#1091D1" }}>PUC</StyledTitle>
      <StyledTitle sx={{ color: "#E0107F" }}>Clinical</StyledTitle>
    </Box>
  );
}

export default CustomTitle;
