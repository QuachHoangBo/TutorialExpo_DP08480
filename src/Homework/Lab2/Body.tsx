import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import { UserType } from "./Main";
import { FC, memo, useState } from "react";

type BodyType = {
  onUpdateInfor: (_user: UserType) => void;
  onClickChangeBgFooter: () => void;
};

const Body: FC<BodyType> = memo((props) => {
  console.log("re-Render Body");
  const { onUpdateInfor, onClickChangeBgFooter } = props;

  const [name, setName] = useState("");
  const [linkImage, setLinkImage] = useState("");
  const handleChangeInfor = () => {
    if (name.length > 0 && linkImage.length > 0) {
      onUpdateInfor({ name, avatar: linkImage });
    } else {
      ToastAndroid.show("Không được để trống", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Nhập tên mới"
      ></TextInput>
      <TextInput
        value={linkImage}
        onChangeText={setLinkImage}
        style={styles.input}
        placeholder="Nhập địa chỉ anh mới"
      ></TextInput>
      <Button title="Update Infor" onPress={handleChangeInfor} />
      <Button title="Change Color Footer" onPress={onClickChangeBgFooter} />
    </View>
  );
});

export { Body };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: "80%",
    height: "80%",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
});
