import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { setCreateUser } from "../../services/userService";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleCreateUser = () => {
    const response = setCreateUser({
      username: username,
      password: password,
      fullname: fullname,
      address: address,
    });

    console.log(response);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "100px",
      }}
    >
      <Header />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CustomInput
          label="Nome completo"
          placeholder="Insira seu Nome completo"
          value={fullname}
          setValue={setFullname}
        />
        <CustomInput
          label="E-mail"
          placeholder="Insira seu e-mail"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          type={showPassword ? "text" : "password"}
          label="Senha"
          placeholder="Insira sua senha"
          value={password}
          setValue={setPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <CustomInput
          label="Endereço"
          placeholder="Insira seu endereço"
          value={address}
          setValue={setAddress}
        />

        <CustomButton
          variant="contained"
          text="Registrar"
          handleClick={handleCreateUser}
        />
        <CustomButton
          variant="text"
          text="Voltar"
          handleClick={() => navigate("/")}
        />
      </Box>
    </Box>
  );
}

export default Register;
