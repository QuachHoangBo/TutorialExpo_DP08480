import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import SlideLab from "./src/Homework/SlideLab";
// import Lab1_1 from "./src/Homework/Lab1/Lab1-1"; // Import các màn hình Lab
// import Lab1_2 from "./src/Homework/Lab1/Lab1-2";
// import Lab1_3 from "./src/Homework/Lab1/Lab1-3";
// import Lab2 from "./src/Homework/Lab2/Main";
import Run from "./src/Studying/Run";
import { Text, View } from "react-native";

// const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="SlideLab" component={SlideLab} />
    //     <Stack.Screen name="Lab1-1" component={Lab1_1} />
    //     <Stack.Screen name="Lab1-2" component={Lab1_2} />
    //     <Stack.Screen name="Lab1-3" component={Lab1_3} />
    //     <Stack.Screen name="Lab2" component={Lab2} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <Run />
    </View>
  );
};

export default App;
