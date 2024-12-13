import { DailyTips } from "@/components/daily-tips";
import { FootprintDashboard } from "@/components/footprint-dashboard";
import { HeaderHome } from "@/components/header-home";
import { MyGoalsComp } from "@/components/my-goals-comp";
import { ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
      showsVerticalScrollIndicator={false}
    >
      <HeaderHome
        title={"Bem vindo de volta!"}
        subtitle={"Olá, Filipe Nunes"}
      />
      <FootprintDashboard />
      <MyGoalsComp />
      <DailyTips />
    </ScrollView>
  );
}
