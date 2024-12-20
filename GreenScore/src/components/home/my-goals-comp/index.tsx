import CircularProgress from "@/components/circular-progress";
import { useTasks } from "@/server/task-maneger";
import { colors } from "@/styles/colors";
import { IconBath, IconBike, IconRecycle } from "@tabler/icons-react-native";
import React, { useState } from "react";
import { View } from "react-native";
import { HeaderHome } from "../../header-home";
import { s } from "./styles";

export function MyGoalsComp() {
  const { tasks } = useTasks();
  const [tasks_, setTasks] = useState([
    {
      id: 1,
      title: "Reduzir banho para 7 min",
      subtitle: "Faltam 2 dias",
      color: colors.yellow,
      progress: 80,
      icon: IconBath,
    },
    {
      id: 2,
      title: "Usar transporte público",
      subtitle: "Faltam 3 dias",
      color: colors.blue,
      progress: 50,
      icon: IconBike,
    },
    {
      id: 3,
      title: "Separar lixo reciclável",
      subtitle: "Faltam 5 dias",
      color: colors.green,
      progress: 20,
      icon: IconRecycle,
    },
    {
      id: 4,
      title: "Separar lixo reciclável",
      subtitle: "Faltam 5 dias",
      color: colors.green,
      progress: 90,
      icon: IconRecycle,
    },
  ]);

  return (
    <View style={s.container}>
      <HeaderHome
        title={"Suas metas"}
        subtitle={
          true
            ? "Complete suas metas e ganhe mais EcoPontos!"
            : "Parabéns! 🎉 Você completou todas as metas de hoje e ajudou o planeta! 🌱"
        }
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
            title={task.name}
            percentage={task.progress}
            color={task.color}
            icon={task.icon}
          />
        ))}
        {/*
          <FlatList
            data={tasks}
            renderItem={({ item, index }) => (
              <CircularProgress
                key={item.id}
                title={item.name}
                percentage={item.progress}
                color={item.color}
                icon={item.icon}
              />
            )}
          />
        */}
      </View>
    </View>
  );
}
