import { FootprintDashboard } from "@/components/home/footprint-dashboard";
import { MyGoalsComp } from "@/components/home/my-goals-comp";
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[100] }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          paddingTop: 40,
          backgroundColor: colors.gray[100],
        }}
        showsVerticalScrollIndicator={false}
      >
        {/*<HeaderHome
        title={"Bem vindo de volta!"}
        subtitle={"Olá, Filipe Nunes"}
      />*/}
        <FootprintDashboard />
        {/*<FastInfos />*/}
        <MyGoalsComp />
        {/*<DailyTips />*/}
      </ScrollView>
      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          router.push("/create_task/create-task");
        }}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    backgroundColor: colors.green.base,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
