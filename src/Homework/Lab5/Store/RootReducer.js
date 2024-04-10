import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./Root/counterReducer";

const RootReducer = combineReducers({
  counter: counterReducer,
});

export default RootReducer;
