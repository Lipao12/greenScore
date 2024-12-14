import { IconBulb } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { HeaderHome } from "../home/header-home";
import { s } from "./styles";

export function DailyTips() {
  return (
    <View style={s.container}>
      <HeaderHome title={"Fica a dica! 😉"} />

      <View style={s.container}>
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <IconBulb width={37} height={37} color="#6abf69" />
          <Text style={s.title}>
            Ao lavar as vasílias lembre de desligar a torneira!
          </Text>
        </View>
      </View>
    </View>
  );
}
