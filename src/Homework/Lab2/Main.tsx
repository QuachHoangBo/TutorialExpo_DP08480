import { Text, View } from "react-native";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { useCallback, useEffect, useState } from "react";

export type UserType = {
  name: string;
  avatar: string;
};

const colors = ["white", "black", "red", "blue", "yellow", "green"];
export default function Main() {
  const [user, setUser] = useState<UserType>({
    name: "NO NAME",
    avatar:
      "https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png",
  });

  const [lastTimeUpdate, setLastTimeUpdate] = useState(
    "Bạn chưa cập nhật thông tin"
  );
  const [footerColor, setFooterColor] = useState(colors[0]);

  //ham ramdom mau
  const handleRandomColor = useCallback(() => {
    const numberRandom = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[numberRandom]);
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const datetime =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear() +
      " " +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    setLastTimeUpdate(datetime);
    console.log(datetime);
  });

  // Cập nhật thông tin tài khoản
  const handleUpdateInfor = useCallback((_user: UserType) => {
    setUser(_user);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ade6bb",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>
        React NATIVE HOOKS
      </Text>
      <Header user={user} />
      <Body
        onUpdateInfor={handleUpdateInfor}
        onClickChangeBgFooter={handleRandomColor}
      />
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor}/>
    </View>
  );
}
