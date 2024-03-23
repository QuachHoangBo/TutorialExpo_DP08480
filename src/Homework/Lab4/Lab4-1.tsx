import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Platform,
  StatusBar,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from "react-native";
import { WINDOW_HEIGHT } from "../components/Utils/until";
import SearchInput from "../components/SearchInput/SearchInput";

export default ({ navigation }: any) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const bannerAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [-200, 0],
          outputRange: [2, 1],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const searchInputContainerAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 40],
      outputRange: [0, 1],
    }),
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1, 40],
          outputRange: [0, 1, 1],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const searchIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 40],
      outputRange: [1, 0],
    }),
  };

  const backIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 40],
      outputRange: [1, 0],
    }),
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />

      <Animated.View
        style={[styles.searchInputContainer, searchInputContainerAnimation]}
      >
        <SafeAreaView />
        <SearchInput editable={false} pointerEvents="none" />
      </Animated.View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Animated.Image
          source={require("../assests/back.png")}
          style={[styles.backIcon, backIconAnimation]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchButton}>
        <Animated.Image
          source={require("../assests/search.png")}
          style={[styles.searchIcon, searchIconAnimation]}
        />
      </TouchableOpacity>

      <ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: animatedValue },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <Animated.View style={[styles.bannerContainer, bannerAnimation]}>
          <Image
            style={styles.banner}
            source={require("../assests/minh-banner.jpg")}
          />
        </Animated.View>
        {/* Danh sách món ăn */}
        {foodData.map((food, index) => (
          <TouchableOpacity key={index} style={styles.foodItem}>
            <Image source={food.image} style={styles.foodItemImage} />
            <Text style={styles.foodItemText}>{food.name}</Text>
          </TouchableOpacity>
        ))}

        {/* Các View khác trong ScrollView */}
        <View style={styles.scrollViewContent} />
      </ScrollView>
    </View>
  );
};

const BANNER_HEIGHT = 224;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchButton: {
    position: "absolute",
    right: 0,
    top: 48,
    width: 48,
    height: 48,
    zIndex: 100,
  },
  searchIcon: {
    width: 32,
    height: 32,
    tintColor: "white",
    zIndex: 50,
  },
  backButton: {
    position: "absolute",
    left: 16,
    top: 48,
    width: 48,
    height: 48,
    zIndex: 100,
  },
  backIcon: {
    width: 16,
    height: 16,
    tintColor: "white",
    zIndex: 50,
  },
  searchInputContainer: {
    position: "absolute",
    zIndex: 100,
    width: "100%",
    padding: 16,
    backgroundColor: "white",
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
  },
  bannerContainer: {
    height: BANNER_HEIGHT,
    width: "100%",
  },
  banner: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  paddingForBanner: {
    height: BANNER_HEIGHT,
  },
  scrollViewContent: {
    height: WINDOW_HEIGHT,
    backgroundColor: "white",
  },
  foodItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  foodItemImage: {
    width: 64,
    height: 64,
    marginRight: 16,
    resizeMode: "cover",
    borderRadius: 8,
  },
  foodItemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

const foodData = [
  { name: "Bánh mì gà", image: require("../assests/food4.png") },
  { name: "Phở bò", image: require("../assests/food5.png") },
  { name: "Bún chả", image: require("../assests/food6.png") },
  { name: "Cơm tấm", image: require("../assests/food8.png") },
  { name: "Bánh cuốn", image: require("../assests/food9.png") },
  // Thêm các món ăn khác tương tự
];
