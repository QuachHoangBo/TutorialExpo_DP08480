import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Component = () => {
  const [count, setcount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Text
        onPress={() => {
          setcount(count + 1);
          console.log("click");
        }}
      >
        Click
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
export default Component;
