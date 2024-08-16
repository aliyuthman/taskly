import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Shopping List" }} />
      {/* others screens, except when there's need to add extra properties with stack screens, theres no need to define them here. As these are linked with expo router navigation. For modal screen as well, because we need to use presentation settings, we need to define them */}
      <Stack.Screen
        name="counter"
        options={{
          title: "Counter",
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen name="idea" options={{ title: "Idea" }} />
    </Stack>
  );
}
