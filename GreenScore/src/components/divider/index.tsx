import { View } from "react-native";
import { s } from "./styles";

export function Divider({ style = {} }) {
  return <View style={[s.container, style]} />;
}
