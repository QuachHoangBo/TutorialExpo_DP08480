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
<<<<<<< HEAD
=======
        <Text>Lab1</Text>
>>>>>>> parent of 190c5e2 (reload file)
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
<<<<<<< HEAD
=======
      <View style={styles.row}>
        <Text>Lab2</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={() => navigation.navigate("Lab2")} // Chuyển đến Lab2
        >
          <Text>Lab 2</Text>
        </TouchableOpacity>
      </View>
>>>>>>> parent of 190c5e2 (reload file)
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
<<<<<<< HEAD
=======
    width: "80%",
    justifyContent: "space-between",
>>>>>>> parent of 190c5e2 (reload file)
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
