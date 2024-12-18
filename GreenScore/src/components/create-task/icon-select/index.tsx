import { colors } from "@/styles/colors";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

interface Props {
  name: string;
  style_button: boolean;
  style: { backgroundColor: string; color: string };
  onPress: () => void;
  icon: React.ComponentType<TablerIconProps>;
}

export const IconCard = ({
  name,
  style_button,
  style,
  icon: Icon,
  onPress,
}: Props) => {
  console.log(name, style_button, Icon);
  return (
    <TouchableOpacity
      style={[
        s.container,
        style_button && s.selectButton,
        style_button && style,
      ]}
      onPress={onPress}
    >
      <View style={s.iconContainer}>
        <Icon size={37} color={style_button ? style.color : colors.gray[600]} />
      </View>
      <Text style={s.text}>{name}</Text>
    </TouchableOpacity>
  );
};
