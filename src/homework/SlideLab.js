import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

const SlideLab = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab1-1")} // Chuyển đến Lab1_2
        >
          <Text>Lab 1-1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab1-2")} // Chuyển đến Lab1_2
        >
          <Text>Lab 1-2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab1-3")} // Chuyển đến Lab1_2
        >
          <Text>Lab 1-3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SlideLab;
