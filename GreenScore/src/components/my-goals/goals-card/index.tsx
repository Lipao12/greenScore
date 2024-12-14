import { colors } from "@/styles/colors";
import { IconX } from "@tabler/icons-react-native"; // Importa um ícone de "X"
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

type Props = {
  title: string;
  subtitle: string;
  icon?: React.ComponentType<{
    width?: number;
    height?: number;
    color?: string;
  }>;
  onDelete: () => void; // Callback para apagar o card
};

export function GoalsCard({ title, subtitle, icon: Icon, onDelete }: Props) {
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.closeButton} onPress={onDelete}>
        <IconX width={20} height={20} color={colors.gray[400]} />
      </TouchableOpacity>

      {/* Conteúdo principal */}
      <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
        {Icon && <Icon width={37} height={37} color={colors.green.base} />}
        <View style={s.textContainer}>
          <Text style={s.title}>{title}</Text>
          {subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
        </View>
      </View>
    </View>
  );
}
