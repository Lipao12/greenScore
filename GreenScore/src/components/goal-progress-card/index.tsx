import { colors } from "@/styles/colors";
import { IconLeaf } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { s } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

export function GoalProgreeCard({ title, subtitle }: Props) {
  return (
    <View style={s.container}>
      <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
        <IconLeaf width={37} height={37} color={colors.green.base} />
        <View style={s.textContainer}>
          <Text style={s.title}>{title}</Text>
          {subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
        </View>
      </View>
    </View>
  );
}
