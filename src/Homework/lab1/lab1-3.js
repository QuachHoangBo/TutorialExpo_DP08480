import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import InputLab1_3 from "./components/InputLab1-3";

const Lab1a3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InputLab1_3 title="Input 1" />
      <InputLab1_3 title="Input 2" />
      <InputLab1_3 title="Input 3" />
      <InputLab1_3 title="Input 4" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "pink",
  },
});

export default Lab1a3;
