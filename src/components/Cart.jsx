import { Text, StyleSheet, View } from "react-native";

export function Cart() {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
