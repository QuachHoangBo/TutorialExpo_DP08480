import { View, Text, StyleSheet } from "react-native";
import File1 from "./Component/File1";

const Run = () => {
  return (
    <View style={styles.container}>
      <File1 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Run;
