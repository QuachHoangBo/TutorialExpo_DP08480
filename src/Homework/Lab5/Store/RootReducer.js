import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./Root/counterReducer";
import pokemonReducer from "./Root/PokemonSlice";

const RootReducer = combineReducers({
  counter: counterReducer,
<<<<<<< HEAD
  pokemon: pokemonReducer,
=======
>>>>>>> parent of 7615c74 (working)
});

export default RootReducer;
