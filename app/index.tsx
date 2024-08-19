import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";
import { useState } from "react";

// Types

type ShopingListItemType = {
  id: string;
  name: string;
};

const initialList: ShopingListItemType[] = [
  { id: "1", name: "coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Milk" },
];

export default function App() {
  const [value, setValue] = useState(""); //useState() function or hook return array of two items, first is the variable you're tracking and the second is the function to call when updating or changing the value of the first item.

  const [shopingListItem, setShopingList] =
    useState<ShopingListItemType[]>(initialList);

  const handleSubmit = () => {
    if (value) {
      const newShopingList = [
        { id: new Date().toTimeString(), name: value },
        ...shopingListItem,
      ];
      setShopingList(newShopingList);
      setValue("");
    }
  };

  return (
    <View style={styles.container}>
      {/* There three main methods navigating between screens using expo-route  */}
      {/* first method to navigate - using link*/}
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

      {shopingListItem.map((item) => (
        <ShoppingListItem name={item.name} key={item.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    // justifyContent: "center",
    paddingTop: 12,
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
  },
});
