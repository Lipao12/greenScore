import { updateHabitProgress } from "@/server/storage";
import { colors } from "@/styles/theme";
import {
  IconCheck,
  IconProps as TablerIconProps,
} from "@tabler/icons-react-native";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { s } from "./styles";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type CircularProgressProps = {
  id: any;
  title?: string;
  color: any;
  percentage: number;
  isDaily?: boolean;
  maxProgress: number;
  icon?: React.ComponentType<TablerIconProps>;
  setCountDailyTask?: ({ done, all }: { done: number; all: number }) => void;
};

const CircularProgress = ({
  id,
  title,
  color,
  maxProgress,
  percentage: inicialPercentage = 0,
  isDaily = false,
  icon: Icon,
  setCountDailyTask,
}: CircularProgressProps) => {
  const radius = 40; // Tamanho reduzido
  const strokeWidth = 8; // Ajustando a espessura para o tamanho do círculo
  const circumference = 2 * Math.PI * radius;

  const progress = useSharedValue(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    progress.value = withTiming(inicialPercentage, { duration: 1000 });
    if (isDaily && inicialPercentage >= maxProgress) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [inicialPercentage]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset:
      circumference -
      (circumference * (progress.value / maxProgress) * 100) / 100,
  }));

  const handlePress = () => {
    const newProgress = progress.value + 1;
    if (isDaily) {
      // Se for uma tarefa diária, só aumenta o progresso se ainda não atingiu 100%
      if (progress.value < maxProgress) {
        progress.value = withSpring(newProgress, {
          damping: 10,
          stiffness: 80,
        });

        if (setCountDailyTask && newProgress <= maxProgress) {
          setCountDailyTask((prev: any) => ({
            done: prev.done + 1,
            all: prev.all,
          }));
        }

        // Verifica se atingiu 100% após o incremento
        if (newProgress >= maxProgress) {
          setIsChecked(true);
        }
      }
    } else {
      // Para tarefas não diárias, permite marcar/desmarcar livremente
      const targetValue = isChecked
        ? Math.max(progress.value - 1, 0)
        : Math.min(newProgress, maxProgress);

      progress.value = withSpring(targetValue, {
        damping: 10,
        stiffness: 80,
      });
      setIsChecked(!isChecked);
    }
    updateHabitProgress(id, newProgress);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={{ marginHorizontal: 10 }}
    >
      <View style={s.container}>
        <Svg height="100" width="100" viewBox="0 0 100 100">
          {/* Círculo de Fundo (background) */}
          <Circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#E6E6E6"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Círculo Interno com cor dinâmica */}
          <Circle
            cx="50"
            cy="50"
            r={radius - strokeWidth / 2}
            fill={color.soft}
          />

          {/* Círculo Animado de Progresso */}
          <AnimatedCircle
            cx="50"
            cy="50"
            r={radius}
            stroke={color.base}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            animatedProps={animatedProps}
            strokeLinecap="round"
            fill="none"
            transform="rotate(-90 50 50)"
          />
        </Svg>

        {/* Ícone no centro do círculo */}
        <View style={s.iconContainer}>
          {false && Icon && <Icon width={32} height={32} color={color.dark} />}
        </View>

        {/* Overlay para o check */}
        {isChecked && isDaily && (
          <View style={s.overlay}>
            <IconCheck size={60} strokeWidth={5} color="#FFF" />
            <IconCheck
              size={60}
              strokeWidth={3}
              color={colors.green.base}
              style={{ position: "absolute" }}
            />
          </View>
        )}
      </View>

      {/* Título da task */}
      {title && (
        <View style={{ marginTop: 5, alignItems: "center" }}>
          <Text
            numberOfLines={4}
            ellipsizeMode="tail"
            style={[
              s.title,
              { textDecorationLine: isChecked ? "line-through" : "none" },
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CircularProgress;
