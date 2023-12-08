export const scheduleListRequest = (list) => {
  return {
    type: "SCHEDULE_LIST",
    payload: list,
  };
};
