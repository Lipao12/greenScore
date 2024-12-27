import { Loading } from "@/components/loading";
import { resetDailyProgress, storage } from "@/server/storage";
import { GoalsProvider } from "@/server/task-maneger";
import { colors } from "@/styles/colors";
import {
  DancingScript_400Regular,
  DancingScript_600SemiBold,
  DancingScript_700Bold,
} from "@expo-google-fonts/dancing-script";
import {
  FuzzyBubbles_400Regular,
  FuzzyBubbles_700Bold,
} from "@expo-google-fonts/fuzzy-bubbles";
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts,
} from "@expo-google-fonts/rubik";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
//import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
    DancingScript_400Regular,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
    FuzzyBubbles_400Regular,
    FuzzyBubbles_700Bold,
  });

  useEffect(() => {
    resetDailyProgress();
  }, []);

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    //<GestureHandlerRootView style={{ flex: 1 }}>
    <GoalsProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.gray[100] },
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </GoalsProvider>
    //</GestureHandlerRootView>
  );
}
