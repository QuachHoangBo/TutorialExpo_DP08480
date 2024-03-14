import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import InputLab1_3 from "./components/InputLab1-3";

const Lab1a3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InputLab1_3 />
      <InputLab1_3 />
      <InputLab1_3 />
      <InputLab1_3 />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Lab1a3;
