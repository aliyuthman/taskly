import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "./theme";
export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure, you want to delete this?",
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, deleting"),
          style: "destructive",
        },

        {
          text: "Cancel",
          onPress: () => console.log("Ok, canceling"),
          style: "cancel",
        },
      ],
    );
  };
  return (
    <View style={styles.container}>
      {/* 

//Using Pressable button
      <Pressable onPress={ () => console.log("Delee Button Press")}>
      <Text>Delete</Text>
      </Pressable> */}
      {/* Using Touchable Button */}

      <View style={styles.itemsContainer}>
        {/* <Button title="Press Me" /> This is usually not used in production app, because you cannot customize it */}

        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => handleDelete()}

          onPress={handleDelete}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },

  itemsContainer: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colorCerulian,
    borderStyle: "solid",

    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },

  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },

  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
