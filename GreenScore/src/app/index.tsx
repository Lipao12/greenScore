import { Button } from "@/components/button";
//import { verifyInstallation } from "nativewind";
import { Text, View } from "react-native";

export default function Index() {
  //verifyInstallation();
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Button
        onPress={() => {
          //router.navigate("/home");
        }}
      >
        <Button.Title>Começar</Button.Title>
      </Button>

      <View>
        <View className="flex-1 justify-center items-center bg-blue-500">
          <Text className="text-lime-400 text-lg font-bold">
            Hello NativeWind!
          </Text>
        </View>
      </View>
    </View>
  );
}
