import React, { useState } from "react";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    // Khởi tạo mảng với các tài khoản mẫu
    { username: "admin123", password: "12345" },
    { username: "user123", password: "abcde" },
  ]);
  // const {usernamelogin} = route.params;
  // const {passwordlogin} = route.params;

  const handleLogin = () => {
    // Kiểm tra tài khoản đăng nhập có trong mảng không
    const foundAccount = accounts.find(
      (account) =>
        account.username === username && account.password === password
    );
    if (foundAccount) {
      // Thông báo đăng nhập thành công hoặc chuyển hướng đến trang chính
      alert("Đăng nhập thành công");
      navigation.navigate("HomePage");
    } else {
      // Thông báo đăng nhập thất bại
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Image
        source={require("./Img/backgroundLogin.jpg")}
        style={{
          width: "113%",
          height: 200,
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
          marginBottom: 50,
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
          Chào mừng Bạn
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
          Đăng nhập tài khoản
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        underlineColorAndroid="transparent"
        selectionColor="#818CF8"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        value={password}
        underlineColorAndroid="transparent"
        selectionColor="#818CF8"
      />
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
            borderColor: "black",
          }}
        />
        <Text style={{ fontSize: 12 }}>ghi nhớ tài khoản</Text>
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
        onPress={handleLogin}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Đăng nhập
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
        <Text>Bạn chưa có tài khoản ?</Text>
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
            navigation.navigate("Signin");
          }}
        >
          <Text
            style={{
              color: "#9BCF53",
            }}
          >
            Đăng ký ngay
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
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: "100%",
    borderRadius: 10,
    borderColor: "green",
    backgroundColor: "#EEEEEE",
  },
});
