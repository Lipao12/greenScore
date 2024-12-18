import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

interface Props {
  name: string;
  style_button: boolean;
  style: object;
  onPress: () => void;
  icon: React.ComponentType<{ size?: number }>;
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
        <Icon size={37} />
      </View>
      <Text style={s.text}>{name}</Text>
    </TouchableOpacity>
  );
};
