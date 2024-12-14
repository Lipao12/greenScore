import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingVertical: 16,
        gap: 10,
    },
    title: {
        fontSize: 24,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[600]
    },
    subtitle: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[400],
    },
})