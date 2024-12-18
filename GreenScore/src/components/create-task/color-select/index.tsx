import React from "react";
import { TouchableOpacity } from "react-native";
import { s } from "./styles";

interface Props {
  style_button: object;
  onPress: () => void;
}

export const ColorCard = ({ style_button, onPress }: Props) => {
  return (
    <TouchableOpacity style={[s.colorButton, style_button]} onPress={onPress} />
  );
};
