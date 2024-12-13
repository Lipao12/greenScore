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
      isCompleted: false,
    },
    {
      id: 2,
      title: "Usar transporte público",
      subtitle: "Faltam 3 dias",
      progress: 50,
      isCompleted: false,
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
        />
      ))}
    </View>
  );
}
