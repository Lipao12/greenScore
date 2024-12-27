import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    progressBarContainer: {
        marginTop: 16,
        width: "100%",
      },
      progressBarBackground: {
        height: 10,
        backgroundColor: colors.gray[300],
        borderRadius: 4,
        overflow: "hidden",
      },
      progressText: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 13,
        color: colors.gray[200],
      },
      boldText: {
        fontFamily: fontFamily.bold,
        fontSize: 16,
        color: colors.gray[200],
      },
})