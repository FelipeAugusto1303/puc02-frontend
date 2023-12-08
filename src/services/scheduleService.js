import { doctorsList, schedulingList } from "../database/database";

const generateId = () => {
  if (schedulingList.length === 0) {
    return 1;
  }
  return schedulingList[schedulingList.length - 1].id + 1;
};

const createScheduleService = (schedule) => {
  const newSchedule = { id: generateId(), ...schedule };
  schedulingList.push(newSchedule);
  return schedulingList;
};

export const setCreateSchedule = (schedule) => {
  if (schedule) {
    const newScheduleList = createScheduleService(schedule);
    return {
      status: "201",
      message: "Schedule created",
      response: newScheduleList,
    };
  } else {
    return {
      status: "400",
      message: "Bad request",
    };
  }
};

export const getScheduleList = (id) => {
  return {
    status: "200",
    response: schedulingList.filter((schedule) => schedule.userId === id),
  };
};

export const getScheduleById = (id) => {
  const index = schedulingList.findIndex((schedule) => schedule.id === id);
  return {
    status: "200",
    response: schedulingList[index],
  };
};

export const getDoctorById = (id) => {
  return {
    status: "200",
    response: doctorsList.find((doctor) => doctor.id === id),
  };
};
