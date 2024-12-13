import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingBottom: 16
    },
    title: {
        fontSize: 40,
        fontFamily: fontFamily.bold,
        color: colors.gray[600]
    },
    subtitle: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[400],
    },
})