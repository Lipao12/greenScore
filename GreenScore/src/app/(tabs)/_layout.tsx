import { IconHome, IconLibrary, IconTarget } from "@tabler/icons-react-native";
import { Tabs } from "expo-router";
import React from "react";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#257F49",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <IconHome size={25} color={color} />
            ) : (
              <IconHome size={24} color={color} />
            ),

          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <IconTarget size={25} color={color} />
            ) : (
              <IconTarget size={24} color={color} />
            ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <IconLibrary size={25} color={color} />
            ) : (
              <IconLibrary size={24} color={color} />
            ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
