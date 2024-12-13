import { IconBath, IconBike } from "@tabler/icons-react-native";
import { View } from "react-native";
import { GoalProgreeCard } from "../goal-progress-card";
import { HeaderHome } from "../header-home";
import { s } from "./styles";

export function MyGoalsComp() {
  return (
    <View style={s.container}>
      <HeaderHome
        title={"Suas metas"}
        subtitle={"Complete suas metas e ganhe mais EcoPontos!"}
      />

      <GoalProgreeCard
        title="Use transporte público ou bicicleta 3 vezes por semana."
        subtitle="Faltam 2 dias"
        icon={
          IconBike as React.ComponentType<{
            width?: number;
            height?: number;
            color?: string;
          }>
        }
      />
      <GoalProgreeCard
        title="Reduza o tempo do banho para 7 minutos por dia."
        subtitle="Faltam 5 dias"
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
