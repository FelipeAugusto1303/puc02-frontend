import { combineReducers } from "redux";
import { scheduleReducer } from "./scheduleReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  auth: userReducer,
  schedule: scheduleReducer,
});
