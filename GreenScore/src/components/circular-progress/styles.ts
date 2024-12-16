import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
      },
      textContainer: {
          flexDirection: "column",
          flexShrink: 1,
          maxWidth: "80%",
          gap: 4,
        },
        title: {
          fontSize: 16,
          fontFamily: fontFamily.regular,
          color: colors.gray[600],
          flexWrap: "wrap",
        },
      iconContainer: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        height: 120,
        width: 120,
      },
      overlay: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        height: 120,
        width: 120,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 60,
      },
})