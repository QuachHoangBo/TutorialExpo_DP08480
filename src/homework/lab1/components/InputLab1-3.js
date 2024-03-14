import React from "react";
const { View, Text, TextInput } = require("react-native");

const InputLab1_3 = () => {
  const [inputText, setInputText] = React.useState("");
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text style={{ fontWeight: "bold" }}>Đang nhập: </Text>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
          width: "80%",
        }}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
    </View>
  );
};

export default InputLab1_3;
