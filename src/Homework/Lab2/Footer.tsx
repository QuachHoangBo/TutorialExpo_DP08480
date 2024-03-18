import { FC, memo } from "react";
import { Text, View } from "react-native";


type FooterType = {
  timeUpdate: string;
  backgroundColor: string;

};

const Footer:FC<FooterType> = memo((props) => {
  const { timeUpdate, backgroundColor } = props;
  console.log("re-render Footer");
  return (
    <View
      style={containerStyle({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: backgroundColor,
        padding: 20,
        width: "80%",
        borderRadius: 20,
      })}
    >
      <Text> Thời gian cập nhật thông tin {timeUpdate}</Text>
    </View>
  );
});

const containerStyle = (props) =>({
  ...props
})

export {Footer}