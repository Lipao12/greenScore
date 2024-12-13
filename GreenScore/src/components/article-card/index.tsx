import { colors } from "@/styles/colors";
import { IconLibrary } from "@tabler/icons-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

type Props = {
  title: string;
  subtitle: string;
  onPress: () => void;
};

export function LibraryCard({ title, subtitle, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={s.container}>
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <View style={s.textContainer}>
            <Text style={s.title}>{title}</Text>
            {subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
          </View>
          <IconLibrary width={37} height={37} color={colors.green.base} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
