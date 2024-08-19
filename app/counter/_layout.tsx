import { Pressable } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../theme";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => {
            return (
              <Link href={"/counter/history"} asChild>
                <Pressable hitSlop={20}>
                  <MaterialIcons
                    name="history"
                    size={32}
                    color={theme.colorGrey}
                  />
                </Pressable>
              </Link>
            );
          },
        }}
      />
    </Stack>
  );
}
