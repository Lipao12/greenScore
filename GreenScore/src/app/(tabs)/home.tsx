import { FootprintDashboard } from "@/components/footprint-dashboard";
import { MyGoalsComp } from "@/components/my-goals-comp";
import { colors } from "@/styles/colors";
import { ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 40,
        backgroundColor: colors.gray[100],
        flex: 1,
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
