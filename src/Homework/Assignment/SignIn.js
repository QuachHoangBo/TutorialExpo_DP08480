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
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Kiểm tra các trường thông tin không được để trống
    if (
      !username.trim() ||
      !emailOrPhone.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Kiểm tra tính hợp lệ của email hoặc số điện thoại
    if (!isValidEmail(emailOrPhone) && !isValidPhoneNumber(emailOrPhone)) {
      alert("Email hoặc số điện thoại không hợp lệ.");
      return;
    }

    // Kiểm tra tính hợp lệ của mật khẩu
    if (!isValidPassword(password)) {
      alert("Mật khẩu phải chứa ít nhất 6 ký tự.");
      return;
    }

    // Kiểm tra mật khẩu và mật khẩu xác nhận khớp nhau
    if (password !== confirmPassword) {
      alert("Mật khẩu và mật khẩu xác nhận không khớp.");
      return;
    }

    // Thực hiện logic đăng ký tài khoản ở đây

    // Sau khi đăng ký thành công, chuyển hướng đến trang đăng nhập

    navigation.navigate("Login");
  };

  // Hàm kiểm tra tính hợp lệ của email
  const isValidEmail = (email) => {
    // Sử dụng biểu thức chính quy để kiểm tra tính hợp lệ của email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Hàm kiểm tra tính hợp lệ của số điện thoại
  const isValidPhoneNumber = (phoneNumber) => {
    // Sử dụng biểu thức chính quy để kiểm tra tính hợp lệ của số điện thoại
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phoneNumber);
  };

  // Hàm kiểm tra tính hợp lệ của mật khẩu
  const isValidPassword = (password) => {
    // Kiểm tra mật khẩu có ít nhất 6 ký tự
    return password.length >= 6;
  };

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
        placeholder="Email or your phone number"
        onChangeText={(text) => setEmailOrPhone(text)}
        value={emailOrPhone}
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
      <TextInput
        style={styles.input}
        placeholder="Password 2"
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
        value={confirmPassword}
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
        onPress={handleSignup}
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
