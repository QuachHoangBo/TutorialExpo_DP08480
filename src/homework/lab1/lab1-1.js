import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderCustom from "./components/HeaderCustom";

const Lab1a1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          title="Back"
          style={styles.button}
          onPress={() => navigation.goBack()} // Sử dụng navigation.goBack() để quay lại màn hình trước đó
        />
      </View>
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

export default Lab1a1;
