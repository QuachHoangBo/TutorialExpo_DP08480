import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const BoxAnimation = () => {
  const translateY = useSharedValue(0);

  // Hàm để tạo giá trị ngẫu nhiên cho vị trí ban đầu của cục màu xanh
  const getRandomPosition = () => Math.random() * 400 - 200;

  // Khởi tạo vị trí ban đầu của cục màu xanh
  translateY.value = getRandomPosition();

  // Hàm để thực hiện animation di chuyển
  const moveBox = () => {
    translateY.value = withTiming(getRandomPosition(), {
      duration: 1000,
      easing: Easing.ease,
    });
  };

  // Tạo animated style cho cục màu xanh
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <TouchableOpacity onPress={moveBox} style={{ backgroundColor: "red" }}>
        <Text>Move Box</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});

export default BoxAnimation;
