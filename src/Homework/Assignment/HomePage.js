import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const HomePage = ({ navigation }) => {
  // Danh sách các cây cảnh cố định
  const plantData = [
    {
      id: "1",
      name: "Cây lưỡi hổ",
      price: "$20",
      image:
        "https://images.pexels.com/photos/1031198/pexels-photo-1031198.jpeg?auto=compress&cs=tinydar&dpr=2&h=650&w=940",
    },
    {
      id: "2",
      name: "Cây trầu bà",
      price: "$25",
      image:
        "https://images.pexels.com/photos/1824189/pexels-photo-1824189.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "3",
      name: "Cây kim ngân",
      price: "$30",
      image:
        "https://images.pexels.com/photos/3153522/pexels-photo-3153522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "4",
      name: "Cây phát tài",
      price: "$35",
      image:
        "https://images.pexels.com/photos/2473721/pexels-photo-2473721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "5",
      name: "Cây lan ý",
      price: "$40",
      image:
        "https://images.pexels.com/photos/3929767/pexels-photo-3929767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "6",
      name: "Cây xương rồng",
      price: "$45",
      image:
        "https://images.pexels.com/photos/3711714/pexels-photo-3711714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "7",
      name: "Cây hoa giấy",
      price: "$50",
      image:
        "https://images.pexels.com/photos/5602432/pexels-photo-5602432.jpeg?auto=compress&cs=tinydar&dpr=2&h=650&w=940",
    },
    {
      id: "8",
      name: "Cây sen đá",
      price: "$55",
      image:
        "https://images.pexels.com/photos/4699821/pexels-photo-4699821.jpeg?auto=compress&cs=tinydar&dpr=2&h=650&w=940",
    },
  ];

  // Render một item trong danh sách cây cảnh
  const renderItem = ({ item }) => (
    <View style={styles.plantItem}>
      <Image
        source={{ uri: item.image }}
        style={styles.plantImage}
        resizeMode="cover"
      />
      <Text style={styles.plantName}>{item.name}</Text>
      <Text style={styles.plantPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Phần giới thiệu */}
      <View style={styles.introContainer}>
        <Text style={styles.introTitle}>Giới thiệu về cây cảnh</Text>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/3094211/pexels-photo-3094211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.introImage}
          resizeMode="cover"
        />
      </View>
      {/* Danh sách cây cảnh */}
      <View style={styles.plantList}>
        <FlatList
          data={plantData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      </View>
      <View style={styles.bottombar}>
        <TouchableOpacity style={styles.bottombarButton}>
          <Image
            source={require("../../../assets/icon_home.png")}
            name="home"
            color="black"
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottombarButton}
          onPress={() => navigation.navigate("Search")}
        >
          <Image
            source={require("../../../assets/icon_search.png")}
            name="search"
            color="black"
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottombarButton}
          onPress={() => navigation.navigate("User")}
        >
          <Image
            source={require("../../../assets/icon_user.png")}
            name="user"
            color="black"
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  introContainer: {
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  introTitle: {
    position: "absolute",

    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    zIndex: 100,
    color: "white",
    textAlign: "center",
    width: "100%",
  },
  introImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  plantList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  plantItem: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  plantImage: {
    width: "100%",
    height: 150,
  },
  plantName: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  plantPrice: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingBottom: 5,
    color: "#42b883",
  },
  bottombar: {
    width: "80%",
    flexDirection: "row",
    height: 50,
    backgroundColor: "lightblue",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    zIndex: 100,
  },

  bottombarButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomePage;
