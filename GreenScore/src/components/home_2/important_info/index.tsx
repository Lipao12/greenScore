import { ProgressBar } from "@/components/progress_bar";
import { IconCloud, IconMedal } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import { ShowWidgets } from "../show_widgets";
import { s } from "./styles";

interface Props {
  progress: { done: number; all: number };
}

export function InportantInfo({ progress }: Props) {
  const progressPercentage = Math.floor((progress.done / progress.all) * 100);
  console.log(progressPercentage);
  return (
    <View style={s.container}>
      <ProgressBar progress={progressPercentage} />
      <View style={s.widgetContainer}>
        <ShowWidgets
          text="dias fazendo as tarefas"
          icon={IconMedal}
          value={"15"}
        />
        <ShowWidgets
          text="carbono economizado"
          icon={IconCloud}
          value={"30k"}
        />
      </View>
    </View>
  );
}
