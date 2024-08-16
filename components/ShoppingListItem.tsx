import React from "react";
import { theme } from "../theme";
import { Alert, StyleSheet, TouchableOpacity, View, Text } from "react-native";

type Props = {
  name: string;
  isCompleted?: boolean;
};
export function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure, you want to delete " + name + "?",
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
      ]
    );
  };
  return (
    <View
      style={[
        styles.itemsContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedItemText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
        onPress={handleDelete}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.buttonText,
            isCompleted ? styles.completedButtonText : undefined,
          ]}
        >
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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

  completedItemText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
  },

  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },

  completedButton: {
    backgroundColor: theme.colorGrey,
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

  completedButtonText: {},
});
