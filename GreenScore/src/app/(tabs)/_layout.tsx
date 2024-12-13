import { IconHome, IconTarget } from "@tabler/icons-react-native";
import { Tabs } from "expo-router";
import React from "react";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <IconHome size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          tabBarIcon: ({ color }) => <IconTarget size={24} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
