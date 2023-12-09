import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import { Box, Divider, Typography } from "@mui/material";
import {
  getDoctorById,
  handleCancelSchedule,
} from "../../services/scheduleService";
import ScheduleInfoModal from "../ScheduleInfoModal/ScheduleInfoModal";
import { useDispatch } from "react-redux";
import { scheduleListRequest } from "../../actions/scheduleAction";
import { useSnackbar } from "notistack";

function ScheduleCard({ scheduleItem }) {
  const [doctor, setDoctor] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const response = getDoctorById(scheduleItem.doctorId);
    setDoctor(response.response);
  }, []);

  const handleCancel = () => {
    const response = handleCancelSchedule(scheduleItem.id);
    if (response.status === "200") {
      enqueueSnackbar("Agendamento cancelado com sucesso!", {
        variant: "success",
      });
      dispatch(scheduleListRequest(response.response));
      setOpen(false);
    } else {
      enqueueSnackbar("Falha na requisição!", {
        variant: "error",
      });
    }
  };
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#c2d3e4",
          borderRadius: "20px",
          width: "70%",
          gap: "20px",
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {format(new Date(scheduleItem.schedule_date), "dd/MM/yyyy - hh:mm")}
        </Typography>
        <Divider orientation="vertical" flexItem />
        {doctor && (
          <Box component="div">
            <Typography>
              Medico: {doctor.name} - {doctor.area}
            </Typography>
            <Typography>Local: {doctor.address}</Typography>
          </Box>
        )}
      </Box>
      {doctor && (
        <ScheduleInfoModal
          open={open}
          handleClose={() => setOpen(false)}
          doctor={doctor}
          schedule={scheduleItem}
          handleCancelSchedule={handleCancel}
        />
      )}
    </>
  );
}

export default ScheduleCard;
