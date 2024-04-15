import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Input from "./Components/Input";
import Login from "./Login";
import SignIn from "./SignIn";
import HomePage from "./HomePage";
import Search from "./Notification";
import User from "./User";

const Stack = createStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="User"
          component={User}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
