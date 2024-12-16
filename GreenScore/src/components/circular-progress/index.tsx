import { colors } from "@/styles/theme";
import { IconCheck } from "@tabler/icons-react-native";
import React, { useEffect, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { s } from "./styles";

const { width } = Dimensions.get("window");
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type CircularProgressProps = {
  title?: string;
  color: any;
  percentage: number;
  isTaskDone?: boolean;
  icon?: React.ComponentType<{
    width?: number;
    height?: number;
    color?: string;
  }>;
};

const CircularProgress = ({
  title,
  color,
  percentage: inicialPercentage = 75,
  isTaskDone = false,
  icon: Icon,
}: CircularProgressProps) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  // Valor animado de progresso
  const progress = useSharedValue(0);

  //
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Inicia a animação com a porcentagem desejada
    progress.value = withTiming(inicialPercentage, { duration: 1000 });
  }, [inicialPercentage]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circumference - (circumference * progress.value) / 100,
  }));

  const handlePress = () => {
    const targetValue = isChecked
      ? Math.max(progress.value - 10, 0)
      : Math.min(progress.value + 10, 100);

    progress.value = withSpring(targetValue, {
      damping: 10, // Amortecimento (efeito de suavização)
      stiffness: 80, // Rigidez da animação
    });
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={s.container}>
        <Svg height="120" width="120" viewBox="0 0 120 120">
          {/* Círculo de Fundo (background) */}
          <Circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#E6E6E6"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Círculo Interno com cor dinâmica */}
          <Circle
            cx="60"
            cy="60"
            r={radius - strokeWidth / 2} // Menor que o círculo principal
            fill={color.soft}
          />

          {/* Círculo Animado de Progresso */}
          <AnimatedCircle
            cx="60"
            cy="60"
            r={radius}
            stroke={color.base}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            animatedProps={animatedProps}
            strokeLinecap="round"
            fill="none"
            transform="rotate(-90 60 60)" // Roda o círculo para começar do topo
          />
        </Svg>
        {/* Ícone no centro do círculo */}
        <View style={s.iconContainer}>
          {Icon && <Icon width={44} height={44} color={color.dark} />}
        </View>

        {isChecked && (
          <View style={s.overlay}>
            {/* Borda branca do ícone */}
            <IconCheck size={80} strokeWidth={6} color="#FFF" />
            {/* Ícone principal sobreposto */}
            <IconCheck
              size={80}
              strokeWidth={3.5}
              color={isChecked ? colors.green.base : colors.yellow.base}
              style={{ position: "absolute" }}
            />
          </View>
        )}
      </View>
      {title && (
        <View style={{ marginTop: 10 }}>
          <Text style={s.title}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CircularProgress;
