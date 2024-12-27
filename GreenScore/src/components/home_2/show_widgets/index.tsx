import { colors } from "@/styles/colors";
import { IconProps } from "@tabler/icons-react-native";
import React from "react";
import { Text, View } from "react-native";
import { s } from "./styles";

interface Props {
  value: string | number;
  text: string;
  icon: React.ComponentType<IconProps>;
}

export function ShowWidgets({ value, text, icon: Icon }: Props) {
  return (
    <View style={s.container}>
      <View style={s.iconContainer}>
        <Icon size={35} color={colors.gray[200]} />
        <Text style={s.value}>{value}</Text>
      </View>
      <Text style={s.text}>{text}</Text>
    </View>
  );
}
