import { Button } from "@mui/material";
import React from "react";

function CustomButton({ variant, text, handleClick }) {
  return (
    <Button
      variant={variant}
      onClick={handleClick}
      sx={{
        width: variant === "contained" ? "50%" : null,
        background: variant === "contained" ? "#1091D1" : null,
        borderRadius: "20px",
        color: variant === "contained" ? "#fff" : "#1091D1",
        textTransform: "none",
      }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
