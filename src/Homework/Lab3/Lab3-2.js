import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from "react-native-reanimated";

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
  { id: "6", title: "Item 6" },
  { id: "7", title: "Item 7" },
  { id: "8", title: "Item 8" },
  { id: "9", title: "Item 9" },
  // Thêm các mục khác vào đây
];

const RenderItem = ({ item, index }) => {
  const translateY = useSharedValue(-100);

  React.useEffect(() => {
    translateY.value = withTiming(0, { duration: 500 + index * 100 });
  }, [index]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: interpolate(
        translateY.value,
        [-100, 0],
        [0, 1],
        1 // Thay CLAMP bằng 1
      ),
    };
  });

  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      <Text style={styles.title}>{item.title}</Text>
    </Animated.View>
  );
};

const renderItem = ({ item, index }) => {
  return <RenderItem item={item} index={index} />;
};

const Lab3a2 = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={{
        height: 200,
        backgroundColor: "lightblue",
        padding: 10,
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "blue",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default Lab3a2;
