import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const lab1a3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Lab1 bài3</Text>
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

export default lab1a3;
