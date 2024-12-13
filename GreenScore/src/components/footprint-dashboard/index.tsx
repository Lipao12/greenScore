import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Header } from "../header";
import { Info } from "../info_percetagem";

export function FootprintDashboard() {
  const screenWidth = Dimensions.get("window").width - 16 * 2;

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago"],
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

      <View>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={{
            fillShadowGradientFrom: "#81c784",
            fillShadowGradientTo: "#4caf50",
            backgroundGradientFrom: "#e0f7fa",
            backgroundGradientTo: "#b2ebf2",
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
          }}
          bezier // Suaviza as linhas
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
}
