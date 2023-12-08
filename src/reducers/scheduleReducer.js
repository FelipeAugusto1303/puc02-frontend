const initialState = {
  schedules: {},
  hasList: false,
};

export const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SCHEDULE_LIST":
      return {
        ...state,
        hasList: true,
        schedules: action.payload,
      };
    default:
      return state;
  }
};
