// Trong file PokemonSearch.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Image,
} from "react-native";
import { useLazyFetchPokemonByNameQuery } from "./pokemonApi"; // Giả sử bạn đã tạo hook useLazyFetchPokemonByNameQuery

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPokemonByName = useLazyFetchPokemonByNameQuery();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetchPokemonByName(pokemonName);
      setSearchedPokemon(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nhập tên Pokemon"
        value={pokemonName}
        onChangeText={(text) => setPokemonName(text)}
      />
      <Button title="Tìm kiếm" onPress={handleSearch} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error !== "" && <Text>{error}</Text>}
      {searchedPokemon && (
        <View>
          <Text>{searchedPokemon.name}</Text>
          <Image
            source={{ uri: searchedPokemon.sprites.front_default }}
            style={{ width: 100, height: 100 }}
          />
        </View>
      )}
    </View>
  );
};

export default PokemonSearch;
