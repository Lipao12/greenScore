import { IconBath, IconBike } from "@tabler/icons-react-native";
import { View } from "react-native";
import { GoalProgressCard } from "../goal-progress-card";
import { HeaderHome } from "../header-home";
import { s } from "./styles";

export function MyGoalsComp() {
  return (
    <View style={s.container}>
      <HeaderHome
        title={"Suas metas"}
        subtitle={"Complete suas metas e ganhe mais EcoPontos!"}
      />

      <GoalProgressCard
        title="Use transporte público ou bicicleta 3 vezes por semana."
        subtitle="Faltam 2 dias"
        progress={70}
        icon={
          IconBike as React.ComponentType<{
            width?: number;
            height?: number;
            color?: string;
          }>
        }
      />
      <GoalProgressCard
        title="Reduza o tempo do banho para 7 minutos por dia."
        subtitle="Faltam 5 dias"
        progress={50}
        icon={
          IconBath as React.ComponentType<{
            width?: number;
            height?: number;
            color?: string;
          }>
        }
      />
    </View>
  );
}
