export type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimestamp?: number;
  lastUpdatedTimestamp: number;
};

export const initialList: ShoppingListItemType[] = [
  { id: "1", name: "Coffee", lastUpdatedTimestamp: Date.now() },
  { id: "2", name: "Tea", lastUpdatedTimestamp: Date.now() },
  { id: "3", name: "Milk", lastUpdatedTimestamp: Date.now() },
  { id: "4", name: "Bread", lastUpdatedTimestamp: Date.now() },
  { id: "5", name: "Eggs", lastUpdatedTimestamp: Date.now() },
  { id: "6", name: "Cheese", lastUpdatedTimestamp: Date.now() },
  { id: "7", name: "Fruits", lastUpdatedTimestamp: Date.now() },
  { id: "8", name: "Vegetables", lastUpdatedTimestamp: Date.now() },
  { id: "9", name: "Chicken", lastUpdatedTimestamp: Date.now() },
  { id: "10", name: "Rice", lastUpdatedTimestamp: Date.now() },
  { id: "11", name: "Pasta", lastUpdatedTimestamp: Date.now() },
  { id: "12", name: "Cereal", lastUpdatedTimestamp: Date.now() },
  { id: "13", name: "Yogurt", lastUpdatedTimestamp: Date.now() },
  { id: "14", name: "Butter", lastUpdatedTimestamp: Date.now() },
  { id: "15", name: "Juice", lastUpdatedTimestamp: Date.now() },
  { id: "16", name: "Fish", lastUpdatedTimestamp: Date.now() },
  { id: "17", name: "Beef", lastUpdatedTimestamp: Date.now() },
  { id: "18", name: "Pork", lastUpdatedTimestamp: Date.now() },
  { id: "19", name: "Tomatoes", lastUpdatedTimestamp: Date.now() },
  { id: "20", name: "Potatoes", lastUpdatedTimestamp: Date.now() },
  { id: "21", name: "Onions", lastUpdatedTimestamp: Date.now() },
  { id: "22", name: "Garlic", lastUpdatedTimestamp: Date.now() },
  { id: "23", name: "Olive Oil", lastUpdatedTimestamp: Date.now() },
  { id: "24", name: "Vinegar", lastUpdatedTimestamp: Date.now() },
  { id: "25", name: "Salt", lastUpdatedTimestamp: Date.now() },
  { id: "26", name: "Pepper", lastUpdatedTimestamp: Date.now() },
  { id: "27", name: "Sugar", lastUpdatedTimestamp: Date.now() },
  { id: "28", name: "Flour", lastUpdatedTimestamp: Date.now() },
  { id: "29", name: "Honey", lastUpdatedTimestamp: Date.now() },
  { id: "30", name: "Nuts", lastUpdatedTimestamp: Date.now() },
];
