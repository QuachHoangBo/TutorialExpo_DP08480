import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SlideLab from "./src/Homework/SlideLab";
import Lab1_1 from "./src/Homework/Lab1/Lab1-1"; // Import các màn hình Lab
import Lab1_2 from "./src/Homework/Lab1/Lab1-2";
import Lab1_3 from "./src/Homework/Lab1/Lab1-3";
import Lab2 from "./src/Homework/Lab2/Main";
import Lab3_1 from "./src/Homework/Lab3/Lab3-1";
import Lab3_2 from "./src/Homework/Lab3/Lab3-2";
import Lab3_3 from "./src/Homework/Lab3/Lab3-3";
import Lab4_1 from "./src/Homework/Lab4/Lab4-1";
import Lab4_2 from "./src/Homework/Lab4/Lab4-2";
import Lab4_3 from "./src/Homework/Lab4/Lab4-3";

import RunAssigment from "./src/Homework/Assignment/main";

import Studying from "./src/Studying/Run";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SlideLab" component={SlideLab} />
        <Stack.Screen name="Lab1-1" component={Lab1_1} />
        <Stack.Screen name="Lab1-2" component={Lab1_2} />
        <Stack.Screen name="Lab1-3" component={Lab1_3} />
        <Stack.Screen name="Lab2" component={Lab2} />
        <Stack.Screen name="Lab3-1" component={Lab3_1} />
        <Stack.Screen name="Lab3-2" component={Lab3_2} />
        <Stack.Screen name="Lab3-3" component={Lab3_3} />
        <Stack.Screen name="Lab4-1" component={Lab4_1} />
        <Stack.Screen name="Lab4-2" component={Lab4_2} />
        <Stack.Screen name="Lab4-3" component={Lab4_3} />
      </Stack.Navigator>
    </NavigationContainer>

    // <Studying />

    // <RunAssigment />
  );
};

export default App;
