import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import HeaderCustom from "./components/HeaderCustom";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderCustom title="Header 1" />
      <HeaderCustom title="Header 2" />
      <HeaderCustom title="Header 3" />
      <StatusBar barStyle="light-content" backgroundColor="lightblue" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "lightblue",
    padding: 10,
  },
});

export default App;
