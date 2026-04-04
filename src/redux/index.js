


import homeReducer from "../pages/home/home.duck";
import { combineReducers } from "redux";

const result = combineReducers({
  home: homeReducer,
});

export default result;
