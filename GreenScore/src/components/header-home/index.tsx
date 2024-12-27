import React from "react";
import { Text, View } from "react-native";
import { s } from "./styles";

type Props = {
  title: string;
  subtitle?: string;
  styleContainer?: {};
  styleText?: {};
};

export function HeaderHome({
  title,
  subtitle,
  styleContainer = {},
  styleText = {},
}: Props) {
  return (
    <View style={[s.container, styleContainer]}>
      <Text style={[s.title, styleText]}>{title}</Text>
      {subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
    </View>
  );
}
