import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { useSharedValue, useAnimatedStyle } from "react-native-reanimated";

const App = () => {
  const [data, setData] = useState(["Item 1", "Item 2", "Item 3"]);

  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const onScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    translateY.value = contentOffset.y;
  };

  const renderItem = ({ item }) => {
    return (
      <View style={animatedStyle}>
        <Text style={styles.item}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} onScroll={onScroll} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    fontSize: 18,
    padding: 10,
    backgroundColor: "#ccc",
  },
});

export default App;
