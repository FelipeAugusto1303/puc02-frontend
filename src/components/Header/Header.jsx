import React from "react";
import CustomTitle from "../CustomTitle/CustomTitle";
import { Box } from "@mui/material";

// import { Container } from './styles';

function Header() {
  return (
    <div>
      <Box
        component="img"
        src="./PUC-Clinica-logo.png"
        width="150px"
        height="150px"
      />
      <CustomTitle />
    </div>
  );
}

export default Header;
