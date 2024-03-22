import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import Input from "./Components/Input";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Image
        source={require("./Img/backgroundLogin.jpg")}
        style={{
          width: "113%",
          height: 520,
          position: "absolute",
          top: 0,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      />
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 100,
        }}
      >
        <Text
          style={{
            fontSize: 30,

            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          Đăng ký
        </Text>
        <Text
          style={{
            textAlign: "center",
            margin: 10,
            fontWeight: "bold",
            fontSize: 15,

            color: "white",
          }}
        >
          Tạo tài khoản
        </Text>
      </View>
      <Input placeholder="Username" />
      <Input placeholder="Email or your phone number" />
      <Input placeholder="Password" />
      <Input placeholder="Password 2" />
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 30,
            margin: 10,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: "white",
          }}
        />
        <Text style={{ fontSize: 12, color: "white" }}>ghi nhớ tài khoản</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "100%",
          height: 50,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#9BCF53",
        }}
        onPress={() => {
          alert("Đăng nhập");
          navigation.navigate("Login");
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Đăng Ký
        </Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", margin: 20 }}>
        ------------------- Hoặc -------------------
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity>
          <Image
            source={require("./Img/google.png")}
            style={{ width: 40, height: 40, borderRadius: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("./Img/facebook.png")}
            style={{ width: 40, height: 40, borderRadius: 30 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Text>Bạn Đã có tài khoản ?</Text>
        <TouchableOpacity
          title="Đăng ký"
          style={{
            width: 100,
            height: 60,
            borderRadius: 30,

            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{
              color: "#9BCF53",
            }}
          >
            Đăng nhập!
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
