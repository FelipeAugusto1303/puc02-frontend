import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { changePassword } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useSnackbar } from "notistack";

function ChangePassword() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleChange = () => {
    const body = {
      username: username,
      password: password,
    };
    const response = changePassword(body);
    if (response.status === "200") {
      enqueueSnackbar("Senha redefinida com sucesso", { variant: "success" });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      enqueueSnackbar("Usuário não encontrado", { variant: "error" });
    }
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
          label="E-mail"
          placeholder="Insira seu e-mail"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          type={showPassword ? "text" : "password"}
          label="Senha"
          placeholder="Insira sua nova senha de acesso"
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

        <CustomButton
          variant="contained"
          text="Redefinir"
          handleClick={handleChange}
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

export default ChangePassword;
