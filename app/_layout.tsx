import { View, Text, Image } from "react-native";
import React from "react";
import grolishIcon from "../assets/grolish-logo.png";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";
import { theme } from "../theme";

export default function _layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorOrange }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Grolish",
          tabBarIcon: ({ color }) => (
            <Image
              source={grolishIcon}
              style={{ width: 32, height: 32, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clockcircleo" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="lightbulb" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
