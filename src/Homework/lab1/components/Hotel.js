import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Hotel = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>{`Tên khách sạn: ${item.NameOfHotel}`}</Text>
      <Text>{`Giờ mở cửa: ${item.OpeningTime}`}</Text>
      <Text>{`Địa chỉ: ${item.Address}`}</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Xem chi tiết</Text>
      </TouchableOpacity>
    </View>
  );
};

Hotel.propTypes = {
  item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 170,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "#DDDDDD",
    justifyContent: "space-around",
  },
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF99CC",
    borderRadius: 10,
    fontSize: 20,
  },
});
export default Hotel;
