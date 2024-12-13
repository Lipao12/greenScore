import { colors } from "@/styles/colors";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Header } from "../header";
import { Info } from "../info_percetagem";

export function FootprintDashboard() {
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["Jan", "Fev", "Mar", "Apr", "Mai", "Jun", "Jul", "Ago"],
    datasets: [
      {
        data: [10, 45, 32, 20, 35, 22, 41.7, 39.6],
        strokeWidth: 3, // Espessura da linha
        color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
      },
    ],
  };
  return (
    <View>
      <Header />
      <Info />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LineChart
          data={data}
          width={screenWidth * 0.9}
          height={170}
          withInnerLines={false}
          withHorizontalLabels={false}
          withOuterLines={false}
          fromZero={true}
          chartConfig={{
            fillShadowGradientFrom: colors.green.light, //"#81c784",
            fillShadowGradientTo: colors.green.dark, //"#4caf50",
            backgroundGradientFrom: colors.gray[100], //"#e0f7fa",
            backgroundGradientTo: colors.gray[100], //"#b2ebf2",
            decimalPlaces: 2, // Casas decimais no eixo Y
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(90, 90, 90, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "4",
              strokeWidth: "1",
              stroke: "#6abf69",
            },
            propsForLabels: {},
          }}
          bezier // Suaviza as linhas
          style={{
            marginVertical: 8,
            borderRadius: 16,
            paddingRight: 20,
            paddingLeft: 50,
          }}
        />
      </View>
    </View>
  );
}
