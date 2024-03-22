import React from "react";
import { TextInput, View } from "react-native";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

const Input = (Prop) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={Prop.placeholder}
        underlineColorAndroid="transparent"
        selectionColor="#818CF8"
      />
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: "100%",
    borderRadius: 10,
    borderColor: "green",
    backgroundColor: "#EEEEEE",
  },
});

export default Input;
