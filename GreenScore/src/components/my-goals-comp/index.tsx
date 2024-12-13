import { IconBath, IconBike } from "@tabler/icons-react-native";
import { useState } from "react";
import { View } from "react-native";
import { GoalProgressCard } from "../goal-progress-card";
import { HeaderHome } from "../header-home";
import { s } from "./styles";

export function MyGoalsComp() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Reduzir banho para 7 min",
      subtitle: "Faltam 2 dias",
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

      {tasks.map((task) => (
        <GoalProgressCard
          key={task.id}
          title={task.title}
          subtitle={task.subtitle}
          progress={task.progress}
          icon={task.icon}
        />
      ))}
    </View>
  );
}
