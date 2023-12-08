import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledInput } from "./CustomInput.style";

function CustomInput({ label, placeholder, value, setValue, ...props }) {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        height: "100px",
      }}
    >
      <Typography>{label}</Typography>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </Box>
  );
}

export default CustomInput;
