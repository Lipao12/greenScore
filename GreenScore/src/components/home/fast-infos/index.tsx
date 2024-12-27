import { IconAward, IconDeviceGamepad3 } from "@tabler/icons-react-native";
import { View } from "react-native";
import { FastInfosCard } from "../fast-infos-card";
import { s } from "./styles";
import React from "react";

export function FastInfos() {
  //IconAward   info_text="Sua comunidade economizou 1t de CO₂ este mês, o mesmo que plantar 50 árvores! 🌳🎉"
  return (
    <View style={s.container}>
      <FastInfosCard
        title="Ecopoints"
        subtitle="3"
        progress={0.4}
        type="progress"
        icon={
          IconDeviceGamepad3 as React.ComponentType<{
            width?: number;
            height?: number;
            color?: string;
          }>
        }
      />
      <FastInfosCard
        title="Comunidade"
        icon={
          IconAward as React.ComponentType<{
            width?: number;
            height?: number;
            color?: string;
          }>
        }
        info_text="Sua comunidade economizou 1t de CO₂ este mês, o mesmo que plantar 50 árvores! 🌳🎉"
        type="bar"
        barData={{
          data: [50, 70, 40, 80, 60, 50, 70, 40, 80, 60, 10, 15],
        }}
      />
    </View>
  );
}
