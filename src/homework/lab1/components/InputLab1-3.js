import React from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";

const CheckInput = () => {};
const InputLab1_3 = ({ title }) => {
  const [inputText, setInputText] = React.useState("");
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text style={{ fontWeight: "bold" }}>{title} </Text>
      <TextInput
        placeholder="Nhập giá trị"
        style={{
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
          width: 250,
        }}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
    </View>
  );
};

InputLab1_3.propTypes = {
  title: PropTypes.string,
};

export default InputLab1_3;
