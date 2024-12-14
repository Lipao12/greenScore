import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingBottom: 16
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[600],
        maxWidth: "90%",
        flexShrink: 1,
    },
})