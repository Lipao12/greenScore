import { colors } from "@/styles/colors";
import { Dimensions, Text, View } from "react-native";
import { BarChart, ProgressChart } from "react-native-chart-kit";
import { s } from "./styles";

type Props = {
  title?: string;
  subtitle?: string;
  info_text?: string;
  progress?: number;
  type: "progress" | "bar";
  barData?: { data: number[] };
  icon?: React.ComponentType<{
    width?: number;
    height?: number;
    color?: string;
  }>;
};

export function FastInfosCard({
  title,
  subtitle,
  info_text,
  progress,
  type,
  barData,
  icon: Icon,
}: Props) {
  return (
    <View style={s.container}>
      <View>
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          {Icon && <Icon width={37} height={37} color={colors.green.base} />}
          <View style={s.textContainer}>
            {title && <Text style={s.title}>{title}</Text>}
          </View>
        </View>
        {info_text && (
          <Text style={s.info_text} numberOfLines={5} ellipsizeMode="tail">
            {info_text}
          </Text>
        )}
      </View>
      {info_text ? null : (
        <View>
          {type === "progress" ? (
            <View
              style={{
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ProgressChart
                data={{
                  data: [progress ? progress : 0], // Progresso (0 a 1)
                }}
                width={100}
                height={100}
                strokeWidth={8}
                radius={32}
                hideLegend
                chartConfig={{
                  backgroundColor: colors.gray[100],
                  backgroundGradientFrom: colors.gray[100],
                  backgroundGradientTo: colors.gray[100],
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(0, 150, 0, ${opacity})`,
                  style: {
                    borderRadius: 8,
                  },
                }}
                style={{
                  marginVertical: 8,
                }}
              />
              {subtitle && (
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: colors.gray[600],
                    textAlign: "center",
                  }}
                >
                  {subtitle}
                </Text>
              )}
            </View>
          ) : type === "bar" && barData ? (
            <BarChart
              data={{
                labels: [],
                datasets: [{ data: barData.data }],
              }}
              width={Dimensions.get("window").width * 0.4} // Largura ajustada para o tamanho do card
              height={100}
              fromZero
              chartConfig={{
                backgroundColor: colors.gray[100],
                backgroundGradientFrom: colors.gray[100],
                backgroundGradientTo: colors.gray[100],
                color: (opacity = 1) => `rgba(0, 150, 0, ${opacity})`,
                labelColor: () => colors.gray[600],
                barPercentage: 0.2,
              }}
              showValuesOnTopOfBars={false}
              style={{
                marginVertical: 8,
                paddingRight: 0,
              }}
            />
          ) : null}
        </View>
      )}
    </View>
  );
}
