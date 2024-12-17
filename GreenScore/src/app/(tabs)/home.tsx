import { FootprintDashboard } from "@/components/home/footprint-dashboard";
import { MyGoalsComp } from "@/components/home/my-goals-comp";
import { colors } from "@/styles/colors";
import React from "react";
import { ScrollView } from "react-native";

export default function Home() {
  return (
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
  );
}
