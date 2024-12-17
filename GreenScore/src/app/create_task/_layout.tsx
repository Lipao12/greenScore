import { colors } from "@/styles/colors";
import { Stack } from "expo-router";
import React from "react";

export default () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.red.base },
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};
