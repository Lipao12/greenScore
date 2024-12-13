import { colors } from "@/styles/colors";
import { IconCheck } from "@tabler/icons-react-native"; // Ícone de check
import React, { useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message"; // Biblioteca para o toast
import { s } from "./styles";

type Props = {
  title: string;
  subtitle: string;
  progress: number;
  icon?: React.ComponentType<{
    width?: number;
    height?: number;
    color?: string;
  }>;
};

export function GoalProgressCard({
  title,
  subtitle,
  progress: initialProgress,
  icon: Icon,
}: Props) {
  const [progress, setProgress] = useState(initialProgress);
  const [isChecked, setIsChecked] = useState(false);
  const animatedProgress = useRef(new Animated.Value(initialProgress)).current;

  const handleCheck = () => {
    const newProgress = isChecked
      ? Math.max(progress - 10, 0) // Reduz o progresso ao desmarcar
      : Math.min(progress + 10, 100); // Aumenta o progresso ao marcar

    setProgress(newProgress);
    setIsChecked(!isChecked);

    // Animação da barra de progresso
    Animated.timing(animatedProgress, {
      toValue: newProgress,
      duration: 500,
      useNativeDriver: false,
    }).start();

    // Exibe o toast
    Toast.show({
      type: "success",
      text1: isChecked
        ? "Tarefa removida com sucesso!"
        : "Parabéns! Tarefa concluída! 🎉",
    });
  };

  return (
    <View style={s.container}>
      <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
        {Icon && <Icon width={37} height={37} color={colors.green.base} />}
        <View style={s.textContainer}>
          <Text style={s.title}>{title}</Text>
          {subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
        </View>
      </View>

      {/* Barra de progresso animada */}
      <View style={s.progressBarContainer}>
        <View style={s.progressBarBackground}>
          <Animated.View
            style={{
              height: "100%",
              width: animatedProgress.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
              backgroundColor: colors.green.base,
            }}
          />
        </View>
        <Text style={s.progressText}>{progress}% completo</Text>
      </View>

      {/* Seção de Check */}
      <TouchableOpacity style={s.checkContainer} onPress={handleCheck}>
        <IconCheck
          size={40}
          color={isChecked ? colors.green.base : colors.gray[300]}
          strokeWidth={2}
        />
        <Text style={s.checkText}>
          {isChecked ? "Remover conclusão" : "Marcar como concluída"}
        </Text>
      </TouchableOpacity>

      {/* Toast */}
      <Toast />
    </View>
  );
}
