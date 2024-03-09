import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const Lab1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Helloo every one</Text>
      <Button
        title="Go to Lab2"
        onPress={() => {}}
        color="black"
        titleStyle={{ color: "white" }}
        iconContainerStyle={{ marginRight: 10 }}
      />
      <Button title="Go to Lab2" onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Lab1;
