import { ProgressBar } from "@/components/progress_bar";
import { getConsecutiveSuccessfulDaysCount } from "@/server/storage";
import { IconCloud, IconMedal } from "@tabler/icons-react-native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ShowWidgets } from "../show_widgets";
import { s } from "./styles";

interface Props {
  progress: { done: number; all: number };
}

export function InportantInfo({ progress }: Props) {
  const progressPercentage = Math.floor((progress.done / progress.all) * 100);
  const [consecutive, setConsecutive] = useState(0);
  console.log(progressPercentage);
  useEffect(() => {
    setConsecutive(getConsecutiveSuccessfulDaysCount());
  }, []);
  return (
    <View style={s.container}>
      <ProgressBar progress={progressPercentage} />
      <View style={s.widgetContainer}>
        <ShowWidgets
          text="dias fazendo as tarefas"
          icon={IconMedal}
          value={consecutive}
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
