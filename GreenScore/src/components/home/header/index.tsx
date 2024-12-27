import { colors } from "@/styles/colors";
import { IconLeaf } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { s } from "./styles";
import React from "react";

export function Header() {
  return (
    <View style={s.container}>
      <IconLeaf width={37} height={37} color={colors.green.base} />
      <Text style={s.title}>Pegada de Carbono</Text>
    </View>
  );
}
