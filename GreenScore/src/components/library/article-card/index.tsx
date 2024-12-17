import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

type Props = {
  title: string;
  subtitle: string;
  onPress: () => void;
};

export function LibraryCard({ title, subtitle, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={s.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={s.textContainer}>
          <Text style={s.title}>{title}</Text>
          {subtitle && (
            <Text style={s.subtitle} numberOfLines={2} ellipsizeMode="tail">
              {subtitle}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
