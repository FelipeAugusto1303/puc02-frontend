import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../actions/userAction";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { isLogged, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const response = login({ username: username, password: password });

    if (response.status === "200") {
      dispatch(loginRequest(response.response));
    } else {
      console.log("Usuario nao existe");
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
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "50%",
            marginBottom: "50px",
            marginTop: "-20px",
          }}
        >
          <CustomButton
            variant="text"
            text="Esqueceu a senha?"
            handleClick={() => navigate("/")}
          />
        </Box>
        <CustomButton
          variant="contained"
          text="Entrar"
          handleClick={handleLogin}
        />
        <CustomButton
          variant="text"
          text="Registre-se"
          handleClick={() => navigate("/register")}
        />
      </Box>
    </Box>
  );
}

export default Login;
