import React, { useState, useEffect } from "react";
import { getScheduleList } from "../../services/scheduleService";
import { useDispatch, useSelector } from "react-redux";
import { scheduleListRequest } from "../../actions/scheduleAction";
import Toolbar from "../../components/Toolbar/Toolbar";
import { Box, Button, Typography } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";

function Home() {
  const { schedules, hasList } = useSelector((state) => state.schedule);
  const { user } = useSelector((state) => state.auth);
  const [scheduleList, setScheduleList] = useState(null);
  const dispatch = useDispatch();

  console.log(scheduleList);
  console.log(user);

  useEffect(() => {
    if (hasList) {
      setScheduleList(schedules);
    }
  }, [hasList]);

  useEffect(() => {
    const response = getScheduleList(user.id);
    dispatch(scheduleListRequest(response.response));
  }, []);
  return (
    user && (
      <>
        <Toolbar name={user.fullname} />
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", marginTop: "50px" }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            Meus agendamentos:
          </Typography>
        </Box>
        <CustomButton text="Novo agendamento" variant="contained" />
      </>
    )
  );
}

export default Home;
