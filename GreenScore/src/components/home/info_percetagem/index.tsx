import React from "react";
import { Text, View } from "react-native";
import { s } from "./styles";

export function Info() {
  return (
    <View style={s.container}>
      <Text style={s.title}>-12%</Text>
      <Text style={s.subtitle}>
        Últimos 30 dias <Text style={{ color: "red" }}>-5%</Text>
      </Text>
    </View>
  );
}
