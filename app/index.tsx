import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
  View,
} from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";
import { useState } from "react";
import { initialList } from "./initialData";

// larger listings >> 999
const testData = new Array(1000)
  .fill(null)
  .map((item, index) => ({ id: String(index), name: String(index) }));

console.log(testData);

export default function App() {
  const [value, setValue] = useState(""); //useState() function or hook return array of two items, first is the variable you're tracking and the second is the function to call when updating or changing the value of the first item.

  const [shoppingListItem, setShoppingList] = useState<ShoppingListItemType[]>(
    []
  );

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toTimeString(), name: value },
        ...shoppingListItem,
      ];
      setShoppingList(newShoppingList);
      setValue("");
    }
  };

  const handleDelete = (id: string) => {
    const newShoppingList = shoppingListItem.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
  };

  const handleToggleComplete = (id: string) => {
    const newShoppingList = shoppingListItem.map((item) => {
      if (item.id === id) {
        //TODO
        return {
          ...item,
          completedAtTimestamp: item.completedAtTimestamp
            ? undefined
            : Date.now(),
        };
      }
      return item;
    });

    setShoppingList(newShoppingList);
  };

  return (
    <FlatList
      data={shoppingListItem}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text> Your shopping list is empty</Text>
        </View>
      }
      ListHeaderComponent={
        <>
          <Link href="/counter" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Go to Counter</Text>
            </TouchableOpacity>
          </Link>
          <TextInput
            style={styles.textInput}
            placeholder="E.g. Coffee"
            value={value}
            onChangeText={setValue}
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
          />
        </>
      }
      renderItem={({ item }) => {
        console.log(item); //this shows only the rendered item on screen, therefore flatlist optimized the rendering. The rest are truncated while only the visible component are renderedß
        return (
          <ShoppingListItem
            name={item.name}
            onDelete={() => handleDelete(item.id)}
            isCompleted={Boolean(item.completedAtTimestamp)}
            onToggleComplete={() => handleToggleComplete(item.id)}
          />
        );
      }}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    // justifyContent: "center",
    padding: 12,
  },
  contentContainer: {
    paddingTop: 24,
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

  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
});
