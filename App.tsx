import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <Text style={styles.itemText}>Coffee</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
  },

  itemsContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#1a759f",
    borderStyle: "solid",

    paddingHorizontal: 8,
    paddingVertical: 16,
  },

  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
});
