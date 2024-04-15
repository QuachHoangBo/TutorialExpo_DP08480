import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./HomePage";
import SearchPage from "./Search";
import FavoritePage from "./Notification";
import UserPage from "./User";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="Favorite" component={FavoritePage} />
        <Tab.Screen name="User" component={UserPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
