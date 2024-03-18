import React from "react";
<<<<<<< HEAD
const { View, Text, TextInput } = require("react-native");

const InputLab1_3 = () => {
  const [inputText, setInputText] = React.useState("");
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text style={{ fontWeight: "bold" }}>Đang nhập: </Text>
=======
import PropTypes from "prop-types";
const { View, Text, TextInput } = require("react-native");

const InputLab1_3 = ({ title }) => {
  const [inputText, setInputText] = React.useState("");
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text style={{ fontWeight: "bold" }}>{title} </Text>
>>>>>>> parent of 190c5e2 (reload file)
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
<<<<<<< HEAD
          width: "80%",
=======
          width: 200,
>>>>>>> parent of 190c5e2 (reload file)
        }}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
    </View>
  );
};

<<<<<<< HEAD
=======
InputLab1_3.propTypes = {
  title: PropTypes.string,
};

>>>>>>> parent of 190c5e2 (reload file)
export default InputLab1_3;
