import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./Root/counterReducer";

const RootReducer = combineReducers({
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export default RootReducer;
