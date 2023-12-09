import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import format from "date-fns/format";

import CustomButton from "../CustomButton/CustomButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ScheduleInfoModal({
  open,
  doctor,
  schedule,
  handleClose,
  handleCancelSchedule,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Consulta Agendada
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Medico: {doctor.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Especialidade: {doctor.area}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Local: {doctor.address}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Data: {format(new Date(schedule.schedule_date), "dd/MM/yyyy - hh:mm")}
        </Typography>

        <Box
          component="div"
          sx={{
            mt: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomButton
            text="Cancelar Agendamento"
            variant="contained"
            handleClick={handleCancelSchedule}
          />
        </Box>
      </Box>
    </Modal>
  );
}

export default ScheduleInfoModal;
