import * as React from "react"; // Import React và các thành phần từ thư viện react-native
import { Button, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"; // Import các hàm từ thư viện react-redux
import { increment, decrement } from "./Store/Root/counterReducer"; // Import các action từ file counterReducer trong thư mục Store

export default function Lab5_1() {
  const NameOfLab = "Lab5_1"; // Khai báo biến NameOfLab với giá trị "Lab5_1"
  const count = useSelector((state) => state.counter.value); // Lấy giá trị của counter từ store Redux và lưu vào biến count
  const dispatch = useDispatch(); // Lấy hàm dispatch từ store Redux và lưu vào biến dispatch

  return (
    <View>
      <Text>{NameOfLab}</Text>
      {/* // Hiển thị tên của lab */}
      <Text>{count}</Text>
      {/* // Hiển thị giá trị hiện tại của biến count */}
      <Button title="Increment" onPress={() => dispatch(increment())} />
      {/* Nút"Increment", khi nhấn sẽ gửi action increment đến store Redux */}
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      {/* // Nút
      "Decrement", khi nhấn sẽ gửi action decrement đến store Redux */}
    </View>
  );
}
