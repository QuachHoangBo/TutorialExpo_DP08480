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
        <Text>Lab1</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab1-1")}
        >
          <Text>Lab 1-1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab1-2")}
        >
          <Text>Lab 1-2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab1-3")}
        >
          <Text>Lab 1-3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>Lab2</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab2")}
        >
          <Text>Lab 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>Lab3</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab3-1")}
        >
          <Text>Lab 3-1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab3-2")}
        >
          <Text>Lab 3-2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab3-3")}
        >
          <Text>Lab 3-3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>Lab4</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab4-1")}
        >
          <Text>Lab 4-1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab4-2")}
        >
          <Text>Lab 4-2</Text>
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
    width: "80%",
    justifyContent: "space-between",
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
