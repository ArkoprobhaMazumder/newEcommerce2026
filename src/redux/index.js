


import homeReducer from "../pages/home/home.duck";
import signupReducer from "../pages/signup/signup.duck";
import { combineReducers } from "redux";

const result = combineReducers({
  home: homeReducer,
  signup: signupReducer,
});

export default result;
