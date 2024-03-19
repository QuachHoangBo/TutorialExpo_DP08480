import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
const HeaderCustom = ({ title }) => {
  const PressIn = () => {
    console.log("press in");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={PressIn}>
        <Image
          source={require("../Img/arrowleft.jpg")}
          style={styles.ImgLeft}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Image source={require("../Img/avatahead.jpg")} style={styles.ImgRight} />
    </View>
  );
};

HeaderCustom.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "lightblue",
    marginBottom: 10,
    borderBlockColor: "black",
    borderWidth: 2,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ImgLeft: {
    width: 20,
    height: 20,
  },
  ImgRight: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default HeaderCustom;
