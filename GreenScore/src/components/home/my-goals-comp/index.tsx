import CircularProgress from "@/components/circular-progress";
import { colors } from "@/styles/colors";
import { IconBath, IconBike } from "@tabler/icons-react-native";
import { useState } from "react";
import { View } from "react-native";
import { HeaderHome } from "../../header-home";
import { s } from "./styles";

export function MyGoalsComp() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Reduzir banho para 7 min",
      subtitle: "Faltam 2 dias",
      color: colors.yellow,
      progress: 80,
      icon: IconBath as React.ComponentType<{
        width?: number;
        height?: number;
        color?: string;
      }>,
    },
    {
      id: 2,
      title: "Usar transporte público",
      subtitle: "Faltam 3 dias",
      color: colors.blue,
      progress: 50,
      icon: IconBike as React.ComponentType<{
        width?: number;
        height?: number;
        color?: string;
      }>,
    },
  ]);

  return (
    <View style={s.container}>
      <HeaderHome
        title={"Suas metas"}
        subtitle={"Complete suas metas e ganhe mais EcoPontos!"}
      />

      {/*<GoalProgressCard
  key={task.id}
  title={task.title}
  subtitle={task.subtitle}
  progress={task.progress}
  icon={task.icon}
/>*/}
      <View style={s.cardContainer}>
        {tasks.map((task) => (
          <CircularProgress
            key={task.id}
            title={task.title}
            percentage={task.progress}
            color={task.color}
            icon={task.icon}
          />
        ))}
      </View>
    </View>
  );
}
