import React from "react";
import { StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";
import TravelSchedule from "./components/TravelingSchedule";
import Hotel from "./components/Hotel";

// db la2;
// Traveling schedule
const travelData = {
  schedule: {
    id: 1,
    Address: "Hồ Tràm, Vũng Tàu",
    EventTime: "9:00 AM - 12:00 PM, 12/12/2024",
    Transport: "Xe Bus",
    TransportTime: "21:00 PM - 22:00 PM",
    img: require("./img/imgbackgroundSchedule.jpg"),
  },
  hotel: {
    id: 1,
    NameOfHotel: "Hồng Quỳnh",
    OpeningTime: "6:00 AM - 12:00 AM",
    Address: "234 Quang Trung, Hồ Chí Minh",
  },
};

const Lab1a2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lịch Trình</Text>
      <TravelSchedule item={travelData.schedule} />
      <Text style={styles.title}>Khách Sạn</Text>
      <Hotel item={travelData.hotel} />
      <StatusBar barStyle="light-content" backgroundColor="lightblue" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "lightblue",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
});

export default Lab1a2;
