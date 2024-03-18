import { FC, memo } from "react";
import { Image, Text, View } from "react-native";
type HeaderType = {
  user;
};

const Header: FC<HeaderType> = memo((props) => {
  const { user } = props;
  console.log("re-render header");
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e6bbad",
        padding: 20,
        width: "80%",
        borderRadius: 20,
      }}
    >
      <Image
        source={{
          uri: user.avatar,
        }}
        style={{ width: 70, height: 70, borderRadius: 50 }}
      />
      <View style={{ marginLeft: 20 }}>
        <Text>Xin chào ngày mới!</Text>
        <Text>{user.name}</Text>
      </View>
    </View>
  );
});
export { Header };
