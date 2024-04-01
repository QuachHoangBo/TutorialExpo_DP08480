import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useGetPokemonByNameQuery } from "./code3"; // Đường dẫn đến file chứa pokemonApi

const Lab5_2 = () => {
  const [pokemonName, setPokemonName] = useState("");
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);

  const handleSearch = () => {
    // Gọi API khi người dùng nhấn nút "Xem thông tin"
    if (pokemonName.trim() !== "") {
      // Chỉ gọi API nếu có tên Pokémon được nhập vào
      setPokemonName(pokemonName.trim());
    }
  };

  return (
    <View>
      <Text style={{ fontWeight: "bold", alignItems: "center" }}>
        Thông tin Pokémon {pokemonName}
      </Text>
      <TextInput
        placeholder="Nhập tên Pokémon"
        style={{
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
          width: 250,
        }}
        value={pokemonName}
        onChangeText={setPokemonName}
      />
      <Button title="Xem thông tin" onPress={handleSearch} />
      {isLoading && <Text>Đang tải thông tin...</Text>}
      {error && <Text>Lỗi: {error.message}</Text>}
      {data && (
        <View>
          <Text>Tên Pokémon: {data.name}</Text>
          <Text>Chiều cao: {data.height}</Text>
          <Text>Cân nặng: {data.weight}</Text>
          {/* Thêm các thông tin khác của Pokémon tương ứng */}
        </View>
      )}
    </View>
  );
};

export default Lab5_2;
