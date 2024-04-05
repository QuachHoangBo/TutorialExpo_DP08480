// Trong file pokemonSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonApi } from "../PokemonAPI"; // Đây là file chứa API sử dụng createApi

export const fetchPokemonByName = createAsyncThunk(
  "pokemon/fetchByName",
  async (name) => {
    const response = await pokemonApi.fetchPokemonByName(name);
    return response.data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonByName.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemon = action.payload;
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;

export const selectPokemon = (state) => state.pokemon.pokemon;
export const selectStatus = (state) => state.pokemon.status;
export const selectError = (state) => state.pokemon.error;
