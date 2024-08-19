import React from "react";
import { theme } from "../theme";
import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};
export function ShoppingListItem({
  name,
  isCompleted,
  onDelete,
  onToggleComplete,
}: Props) {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure, you want to delete " + name + "?",
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => onDelete(),
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
    <Pressable
      style={[
        styles.itemsContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
      onPress={onToggleComplete}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedItemText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity onPress={handleDelete} activeOpacity={0.8}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colorCerulian,
    borderStyle: "solid",

    paddingHorizontal: 24,
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
});
