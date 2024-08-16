import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      {/* There three main methods navigating between screens using expo-route  */}
      {/* first method to navigate - using link*/}
      <Link href="/counter" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Counter</Text>
        </TouchableOpacity>
      </Link>

      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" isCompleted={true} />
      <ShoppingListItem name="Sugar" isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
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
