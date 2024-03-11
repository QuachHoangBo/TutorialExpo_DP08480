import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
const TravelSchedule = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>{`Address: ${item.Address}`}</Text>
      <Text>{`EventTime: ${item.EventTime}`}</Text>
      <Text>{`Transport: ${item.Transport}`}</Text>
      <Text>{`TransportTime: ${item.TransportTime}`}</Text>
      <Text>Hình ảnh: </Text>
      <Image source={item.img} style={styles.image} />
    </View>
  );
};

TravelSchedule.propTypes = {
  item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "space-around",
    borderRadius: 20,
    backgroundColor: "#DDDDDD",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
  },
});

export default TravelSchedule;
