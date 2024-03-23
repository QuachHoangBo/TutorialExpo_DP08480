import React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomePage = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Planta - tỏa sáng</Text>
        <Text>Không gian nhà bạn</Text>
        <TouchableOpacity>
          <Text style={{ color: "#9BCF53" }}>Xem hàng mới về </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", height: 500, backgroundColor: "##9BCF53" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cây trồng</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
