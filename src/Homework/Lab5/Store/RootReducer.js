import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./Root/counterReducer";
// import pokemonReducer from "./Root/PokemonSlice";

const RootReducer = combineReducers({
  counter: counterReducer,
  // pokemon: pokemonReducer,
});

export default RootReducer;
