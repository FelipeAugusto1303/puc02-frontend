import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ToolbarTitle from "../ToolbarTitle/ToolbarTitle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";

function Toolbar({ name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged } = useSelector((state) => state.auth);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!isLogged && logout) {
      navigate("/");
    }
  }, [isLogged]);

  const handleLogout = () => {
    dispatch(logoutRequest());
    setLogout(true);
  };
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box
          component="img"
          src="./PUC-Clinica-logo.png"
          width="50px"
          height="50px"
        />
        <ToolbarTitle />
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
          Ola, {name}
        </Typography>
        <LogoutIcon fontSize="20px" onClick={handleLogout} />
      </Box>
    </Box>
  );
}

export default Toolbar;
