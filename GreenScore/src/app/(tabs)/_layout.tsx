import { IconHome, IconLibrary, IconTarget } from "@tabler/icons-react-native";
import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFFFFF", //"#257F49",
          tabBarInactiveTintColor: "#888",
          tabBarItemStyle: {
            margin: 5,
            borderRadius: 15,
          },
          tabBarStyle: {
            paddingHorizontal: 10,
            marginBottom: 10,
            marginHorizontal: 7,
            backgroundColor: "#E9F3EF", //"#F5F5F5",
            borderTopWidth: 0,
            borderRadius: 20,
            elevation: 10, // Sombra no Android
            shadowColor: "#000", // Sombra no iOS
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  backgroundColor: focused ? "#388E3C" : "transparent",
                  borderRadius: 50,
                  padding: 8,
                }}
              >
                <IconHome size={24} color={color} />
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="goals"
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  backgroundColor: focused ? "#388E3C" : "transparent",
                  borderRadius: 50,
                  padding: 8,
                }}
              >
                <IconTarget size={24} color={color} />
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  backgroundColor: focused ? "#388E3C" : "transparent",
                  borderRadius: 50,
                  padding: 8,
                }}
              >
                <IconLibrary size={24} color={color} />
              </View>
            ),
            headerShown: false,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};
