import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/colors";

interface Props {
  progress: number;
}

export const ProgressBar = ({ progress }: Props) => {
  const animatedProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={s.progressBarContainer}>
      <View style={s.progressBarBackground}>
        <Animated.View
          style={{
            height: "100%",
            width: animatedProgress.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
            backgroundColor: colors.yellow.base,
          }}
        />
      </View>
      <Text style={s.progressText}>
        <Text style={s.boldText}>{progress}%</Text> das tarefas de hoje
        concluídas
      </Text>
    </View>
  );
};
