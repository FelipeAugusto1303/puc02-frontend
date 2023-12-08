import { Box, Typography } from "@mui/material";
import React from "react";

function ToolbarTitle() {
  return (
    <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{ color: "#1091D1", fontWeight: "bold", fontSize: "16px" }}
      >
        PUC
      </Typography>
      <Typography
        sx={{ color: "#E0107F", fontWeight: "bold", fontSize: "16px" }}
      >
        Clinical
      </Typography>
    </Box>
  );
}

export default ToolbarTitle;
