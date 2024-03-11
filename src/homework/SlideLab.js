import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import Lab1a1 from "./lab1/lab1-1";
import Lab1a2 from "./lab1/lab1-2";

const SlideLab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Lab1")}
      >
        <Text>Lab1 bài1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Lab2")}
      >
        <Text>Lab1 bài2</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

function Slide() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SlideLab" component={SlideLab} />
        <Stack.Screen name="Lab1" component={Lab1a1} />
        <Stack.Screen name="Lab2" component={Lab1a2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  button: {
    width: "50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF99CC",
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 10,
  },
});

export default SlideLab;
