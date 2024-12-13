import { colors } from "@/styles/colors";
import { Text, View } from "react-native";
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
  progress,
  icon: Icon,
}: Props) {
  return (
    <View style={s.container}>
      <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
        {Icon && <Icon width={37} height={37} color={colors.green.base} />}
        <View style={s.textContainer}>
          <Text style={s.title}>{title}</Text>
          {subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
        </View>
      </View>
      {/* Barra de progresso */}
      <View style={s.progressBarContainer}>
        <View style={s.progressBarBackground}>
          <View
            style={{
              height: "100%",
              width: `${progress}%`,
              backgroundColor: colors.green.base,
            }}
          />
        </View>
        <Text style={s.progressText}>{progress}% completo</Text>
      </View>
    </View>
  );
}
