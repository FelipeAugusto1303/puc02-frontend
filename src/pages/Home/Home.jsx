import React, { useState, useEffect } from "react";
import {
  getScheduleList,
  setCreateSchedule,
} from "../../services/scheduleService";
import { useDispatch, useSelector } from "react-redux";
import { scheduleListRequest } from "../../actions/scheduleAction";
import Toolbar from "../../components/Toolbar/Toolbar";
import { Box, Button, Typography } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import ScheduleCard from "../../components/ScheduleCard/ScheduleCard";
import NewScheduleModal from "../../components/NewScheduleModal/NewScheduleModal";

function Home() {
  const { schedules, hasList } = useSelector((state) => state.schedule);
  const { user } = useSelector((state) => state.auth);
  const [scheduleList, setScheduleList] = useState(null);
  const [open, setOpen] = useState(false);
  const [doctor, setDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasList) {
      setScheduleList((prev) => [...schedules]);
    }
  }, [hasList]);

  useEffect(() => {
    const response = getScheduleList(user.id);
    dispatch(scheduleListRequest(response.response));
  }, []);

  const handleCreateSchedule = () => {
    const body = {
      userId: user.id,
      doctorId: doctor.id,
      schedule_date: selectedDate,
    };
    const response = setCreateSchedule(body);
    if (response.status === "201") {
      setScheduleList((prev) => [...response.response]);
      setOpen(false);
    } else {
      console.log("Bad request");
    }
  };

  return (
    user && (
      <>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Toolbar name={user.fullname} />
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column", marginTop: "50px" }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Meus agendamentos:
            </Typography>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "20px",
                maxHeight: "500px",
                overflowY: "auto",
              }}
            >
              {scheduleList &&
                scheduleList.map((schedule) => (
                  <ScheduleCard key={schedule.id} scheduleItem={schedule} />
                ))}
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              bottom: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
              width: "100%",
            }}
          >
            <CustomButton
              text="Novo agendamento"
              variant="contained"
              handleClick={() => setOpen(true)}
            />
          </Box>
        </Box>
        <NewScheduleModal
          open={open}
          handleClose={() => setOpen(false)}
          selectedDoctor={doctor}
          handleSelectDoctor={setDoctor}
          selectedDate={selectedDate}
          handleSelectDate={setSelectedDate}
          handleCreateSchedule={handleCreateSchedule}
        />
      </>
    )
  );
}

export default Home;
