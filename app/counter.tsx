import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import { useRouter } from "expo-router";

export default function CounterScreen() {
    // second method to navigate using expo router
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.navigate("/idea")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to /Idea</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Counter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },

  button: {
    alignSelf: "center",
    marginBottom: 18,
    backgroundColor: theme.colorOrange,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
});
