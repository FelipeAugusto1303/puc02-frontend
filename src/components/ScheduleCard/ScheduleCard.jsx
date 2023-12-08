import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import { Box, Divider, Typography } from "@mui/material";
import { getDoctorById } from "../../services/scheduleService";

function ScheduleCard({ scheduleItem }) {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const response = getDoctorById(scheduleItem.doctorId);
    setDoctor(response.response);
  }, []);
  return (
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
      }}
    >
      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
        {format(new Date(scheduleItem.schedule_date), "dd/MM/yyyy - hh:mm")}
      </Typography>
      <Divider orientation="vertical" flexItem />
      {doctor && (
        <Box component="div" sx={{}}>
          <Typography>
            Medico: {doctor.name} - {doctor.area}
          </Typography>
          <Typography>Local: {doctor.address}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default ScheduleCard;
