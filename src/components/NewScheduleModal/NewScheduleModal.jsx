import {
  Autocomplete,
  Box,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { doctorsList } from "../../database/database";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

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

function NewScheduleModal({
  open,
  handleClose,
  selectedDoctor,
  handleSelectDoctor,
  selectedDate,
  handleSelectDate,
  handleCreateSchedule,
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
          Novo agendamento:
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Selecione o profissional
        </Typography>
        <Autocomplete
          disablePortal
          value={selectedDoctor}
          onChange={(event, newValue) => {
            handleSelectDoctor(newValue);
          }}
          id="combo-box-demo"
          options={doctorsList}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Selecione o dia de sua consulta
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={2} sx={{ minWidth: 305 }}>
            <DateTimePicker
              value={selectedDate}
              onChange={(date) => handleSelectDate(date)}
              renderInput={(props) => (
                <TextField {...props} variant="outlined" />
              )}
            />
          </Stack>
        </LocalizationProvider>
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
            text="Agendar"
            variant="contained"
            handleClick={handleCreateSchedule}
          />
        </Box>
      </Box>
    </Modal>
  );
}

export default NewScheduleModal;
