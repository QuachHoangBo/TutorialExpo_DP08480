// Trong file pokemonApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    fetchPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
export const { useFetchPokemonByNameQuery } = pokemonApi;

export const useLazyFetchPokemonByNameQuery = (name) => {
  return pokemonApi.endpoints.fetchPokemonByName.useLazyQuery(name);
};
