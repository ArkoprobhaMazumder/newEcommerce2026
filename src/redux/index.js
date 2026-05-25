


import homeReducer from "../pages/home/home.duck";
import signupReducer from "../pages/signup/signup.duck";
import { combineReducers } from "redux";
import userReducer from "./user";

const result = combineReducers({
  home: homeReducer,
  signup: signupReducer,
  user: userReducer,
});

export default result;
