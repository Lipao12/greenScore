import CircularProgress from "@/components/circular-progress";
import { Divider } from "@/components/divider";
import { Task } from "@/types/types";
import React from "react";
import { Text, View } from "react-native";
import { s } from "./styles";

interface Props {
  title: string;
  tasks: Task[];
  setCountDailyTask?: ({ done, all }: { done: number; all: number }) => void;
}
export function ShowGoals({ title, tasks, setCountDailyTask }: Props) {
  return (
    <View style={s.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={s.title}>{title}</Text>
        <Divider style={{ marginLeft: 8, marginRight: 0, flexGrow: 1 }} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
        }}
      >
        <View style={[s.cardContainer]}>
          {tasks.map((item) => {
            return (
              <CircularProgress
                key={item.id}
                id={item.id}
                title={item.name}
                percentage={item.progress}
                color={item.color}
                icon={item.icon}
                maxProgress={item.maxProgress}
                isDaily={item.isDaily}
                doneToday={item.doneToday}
                setCountDailyTask={setCountDailyTask}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}
