import { Text, View } from "react-native";
import { s } from "./styles";

type Props = {
  title: string;
  subtitle?: string;
};

export function HeaderHome({ title, subtitle }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>{title}</Text>
      {subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
    </View>
  );
}
